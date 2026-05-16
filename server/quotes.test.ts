import { describe, it, expect, beforeEach, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAdminContext(): { ctx: TrpcContext } {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return { ctx };
}

function createPublicContext(): { ctx: TrpcContext } {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return { ctx };
}

describe("Quote Request API", () => {
  describe("quotes.submit", () => {
    it("should allow public users to submit quote requests", async () => {
      const { ctx } = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.quotes.submit({
        customerName: "John Doe",
        customerEmail: "john@example.com",
        customerPhone: "+351 912 345 678",
        serviceType: "air-conditioning",
        propertyType: "villa",
        propertySize: "150",
        location: "Albufeira, Algarve",
        description: "Need AC installation for new villa",
      });

      expect(result.success).toBe(true);
      expect(result.quoteId).toBeDefined();
      expect(typeof result.quoteId).toBe("number");
    });

    it("should validate required fields", async () => {
      const { ctx } = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.quotes.submit({
          customerName: "",
          customerEmail: "john@example.com",
          customerPhone: "+351 912 345 678",
          serviceType: "air-conditioning",
          propertyType: "villa",
          location: "Albufeira",
        });
        expect.fail("Should have thrown validation error");
      } catch (error: any) {
        expect(error.message).toContain("too_small");
      }
    });

    it("should validate email format", async () => {
      const { ctx } = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.quotes.submit({
          customerName: "John Doe",
          customerEmail: "invalid-email",
          customerPhone: "+351 912 345 678",
          serviceType: "air-conditioning",
          propertyType: "villa",
          location: "Albufeira",
        });
        expect.fail("Should have thrown validation error");
      } catch (error: any) {
        expect(error.message).toContain("Invalid email");
      }
    });

    it("should validate phone number length", async () => {
      const { ctx } = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.quotes.submit({
          customerName: "John Doe",
          customerEmail: "john@example.com",
          customerPhone: "123",
          serviceType: "air-conditioning",
          propertyType: "villa",
          location: "Albufeira",
        });
        expect.fail("Should have thrown validation error");
      } catch (error: any) {
        expect(error.message).toContain("too_small");
      }
    });

    it("should accept optional fields", async () => {
      const { ctx } = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.quotes.submit({
        customerName: "Jane Smith",
        customerEmail: "jane@example.com",
        customerPhone: "+351 912 345 678",
        serviceType: "solar",
        propertyType: "apartment",
        location: "Lagos",
      });

      expect(result.success).toBe(true);
      expect(result.quoteId).toBeDefined();
    });
  });

  describe("quotes.list", () => {
    it("should require admin role", async () => {
      const { ctx } = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.quotes.list({
          limit: 50,
          offset: 0,
        });
        expect.fail("Should have thrown authentication error");
      } catch (error: any) {
        expect(error.message).toContain("Please login");
      }
    });

    it("should allow admin to list all quotes", async () => {
      const { ctx } = createAdminContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.quotes.list({
        limit: 50,
        offset: 0,
      });

      expect(result).toHaveProperty("quotes");
      expect(result).toHaveProperty("total");
      expect(Array.isArray(result.quotes)).toBe(true);
      expect(typeof result.total).toBe("number");
    });

    it("should filter quotes by status", async () => {
      const { ctx } = createAdminContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.quotes.list({
        status: "new",
        limit: 50,
        offset: 0,
      });

      expect(Array.isArray(result.quotes)).toBe(true);
      // All returned quotes should have status "new"
      result.quotes.forEach((quote: any) => {
        expect(quote.status).toBe("new");
      });
    });

    it("should respect pagination limits", async () => {
      const { ctx } = createAdminContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.quotes.list({
        limit: 10,
        offset: 0,
      });

      expect(result.quotes.length).toBeLessThanOrEqual(10);
    });
  });

  describe("quotes.getById", () => {
    it("should require admin role", async () => {
      const { ctx } = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.quotes.getById({ id: 1 });
        expect.fail("Should have thrown authentication error");
      } catch (error: any) {
        expect(error.message).toContain("Please login");
      }
    });

    it("should return 404 for non-existent quote", async () => {
      const { ctx } = createAdminContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.quotes.getById({ id: 999999 });
        expect.fail("Should have thrown not found error");
      } catch (error: any) {
        expect(error.code).toBe("NOT_FOUND");
      }
    });
  });

  describe("quotes.updateStatus", () => {
    it("should require admin role", async () => {
      const { ctx } = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.quotes.updateStatus({
          id: 1,
          status: "contacted",
        });
        expect.fail("Should have thrown authentication error");
      } catch (error: any) {
        expect(error.message).toContain("Please login");
      }
    });

    it("should validate status enum", async () => {
      const { ctx } = createAdminContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.quotes.updateStatus({
          id: 1,
          status: "invalid-status" as any,
        });
        expect.fail("Should have thrown validation error");
      } catch (error: any) {
        expect(error.message).toContain("Invalid option");
      }
    });

    it("should allow updating status with notes", async () => {
      const { ctx } = createAdminContext();
      const caller = appRouter.createCaller(ctx);

      // First submit a quote
      const publicCtx = createPublicContext();
      const publicCaller = appRouter.createCaller(publicCtx.ctx);
      const submitResult = await publicCaller.quotes.submit({
        customerName: "Test User",
        customerEmail: "test@example.com",
        customerPhone: "+351 912 345 678",
        serviceType: "heat-pump",
        propertyType: "house",
        location: "Portimao",
      });

      // Then update its status
      const updateResult = await caller.quotes.updateStatus({
        id: submitResult.quoteId,
        status: "contacted",
        notes: "Customer called, interested in heat pump",
      });

      expect(updateResult.success).toBe(true);
      expect(updateResult.quote.status).toBe("contacted");
      expect(updateResult.quote.notes).toBe("Customer called, interested in heat pump");
    });
  });

  describe("Service Type Validation", () => {
    it("should accept all valid service types", async () => {
      const { ctx } = createPublicContext();
      const caller = appRouter.createCaller(ctx);
      const serviceTypes = ["air-conditioning", "solar", "heat-pump", "multiple"];

      for (const serviceType of serviceTypes) {
        const result = await caller.quotes.submit({
          customerName: "Test User",
          customerEmail: `test-${serviceType}@example.com`,
          customerPhone: "+351 912 345 678",
          serviceType: serviceType as any,
          propertyType: "villa",
          location: "Algarve",
        });

        expect(result.success).toBe(true);
      }
    });
  });

  describe("Property Type Validation", () => {
    it("should accept all valid property types", async () => {
      const { ctx } = createPublicContext();
      const caller = appRouter.createCaller(ctx);
      const propertyTypes = ["villa", "apartment", "house", "commercial", "other"];

      for (const propertyType of propertyTypes) {
        const result = await caller.quotes.submit({
          customerName: "Test User",
          customerEmail: `test-${propertyType}@example.com`,
          customerPhone: "+351 912 345 678",
          serviceType: "air-conditioning",
          propertyType: propertyType as any,
          location: "Algarve",
        });

        expect(result.success).toBe(true);
      }
    });
  });
});
