import { eq, desc, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, files, InsertFile, quoteRequests, InsertQuoteRequest, QuoteRequest, emailLogs, InsertEmailLog, EmailLog } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

/**
 * File Management Queries
 */

export async function createFile(fileData: InsertFile) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(files).values(fileData);
  return result;
}

export async function getUserFiles(userId: number, category?: string, limit = 20, offset = 0) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const whereClause = category
    ? and(eq(files.userId, userId), eq(files.category, category))
    : eq(files.userId, userId);

  const result = await db
    .select()
    .from(files)
    .where(whereClause)
    .orderBy(desc(files.createdAt))
    .limit(limit)
    .offset(offset);

  return result;
}

export async function getFileById(fileId: number, userId: number) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db
    .select()
    .from(files)
    .where(eq(files.id, fileId))
    .limit(1);

  if (result.length === 0) return null;
  
  // Verify ownership
  if (result[0].userId !== userId) {
    throw new Error("Unauthorized: File does not belong to this user");
  }

  return result[0];
}

export async function deleteFile(fileId: number, userId: number) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  // Verify ownership before deleting
  const file = await getFileById(fileId, userId);
  if (!file) {
    throw new Error("File not found");
  }

  await db.delete(files).where(eq(files.id, fileId));
  return { success: true, fileId };
}

export async function getFileCount(userId: number, category?: string) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const whereClause = category
    ? and(eq(files.userId, userId), eq(files.category, category))
    : eq(files.userId, userId);

  const result = await db
    .select()
    .from(files)
    .where(whereClause);
  
  return result.length;
}

/**
 * Quote Request Management Queries
 */

export async function createQuoteRequest(quoteData: InsertQuoteRequest): Promise<QuoteRequest> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(quoteRequests).values(quoteData);
  const insertedId = (result as any)[0]?.insertId;
  
  if (!insertedId) {
    throw new Error("Failed to create quote request");
  }

  const quote = await db.select().from(quoteRequests).where(eq(quoteRequests.id, Number(insertedId))).limit(1);
  return quote[0];
}

export async function getQuoteRequests(limit = 50, offset = 0, status?: string) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const whereClause = status ? eq(quoteRequests.status, status as any) : undefined;

  const result = await db
    .select()
    .from(quoteRequests)
    .where(whereClause)
    .orderBy(desc(quoteRequests.createdAt))
    .limit(limit)
    .offset(offset);

  return result;
}

export async function getQuoteRequestById(id: number): Promise<QuoteRequest | null> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.select().from(quoteRequests).where(eq(quoteRequests.id, id)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function updateQuoteRequest(id: number, updates: Partial<InsertQuoteRequest>) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  await db.update(quoteRequests).set(updates).where(eq(quoteRequests.id, id));
  return getQuoteRequestById(id);
}

export async function getQuoteRequestCount(status?: string) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const whereClause = status ? eq(quoteRequests.status, status as any) : undefined;
  const result = await db.select().from(quoteRequests).where(whereClause);
  return result.length;
}

/**
 * Email Log Management Queries
 */

export async function createEmailLog(emailData: InsertEmailLog): Promise<EmailLog> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(emailLogs).values(emailData);
  const insertedId = (result as any)[0]?.insertId;
  
  if (!insertedId) {
    throw new Error("Failed to create email log");
  }

  const log = await db.select().from(emailLogs).where(eq(emailLogs.id, Number(insertedId))).limit(1);
  return log[0];
}

export async function updateEmailLog(id: number, updates: Partial<InsertEmailLog>) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  await db.update(emailLogs).set(updates).where(eq(emailLogs.id, id));
  const result = await db.select().from(emailLogs).where(eq(emailLogs.id, id)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function getEmailLogsByQuoteId(quoteRequestId: number, limit = 50, offset = 0) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db
    .select()
    .from(emailLogs)
    .where(eq(emailLogs.quoteRequestId, quoteRequestId))
    .orderBy(desc(emailLogs.createdAt))
    .limit(limit)
    .offset(offset);

  return result;
}

export async function getEmailLogsByStatus(status: string, limit = 50, offset = 0) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db
    .select()
    .from(emailLogs)
    .where(eq(emailLogs.status, status as any))
    .orderBy(desc(emailLogs.createdAt))
    .limit(limit)
    .offset(offset);

  return result;
}
