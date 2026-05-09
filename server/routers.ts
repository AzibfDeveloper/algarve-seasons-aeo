import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createFile, getUserFiles, getFileById, deleteFile, getFileCount } from "./db";
import { storagePut, storageGetSignedUrl } from "./storage";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  files: router({
    upload: protectedProcedure
      .input(z.object({
        fileName: z.string().min(1).max(255),
        fileData: z.instanceof(Buffer),
        mimeType: z.string().default("application/octet-stream"),
        category: z.string().max(100).default("general"),
      }))
      .mutation(async ({ ctx, input }) => {
        try {
          // Validate file size (max 50MB)
          const MAX_FILE_SIZE = 50 * 1024 * 1024;
          if (input.fileData.length > MAX_FILE_SIZE) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "File size exceeds 50MB limit",
            });
          }

          // Upload to storage
          const timestamp = Date.now();
          const fileKey = `${ctx.user.id}/files/${input.category}/${timestamp}-${input.fileName}`;
          const { key, url } = await storagePut(fileKey, input.fileData, input.mimeType);

          // Save metadata to database
          const file = await createFile({
            userId: ctx.user.id,
            fileName: input.fileName,
            fileKey: key,
            fileUrl: url,
            mimeType: input.mimeType,
            fileSize: input.fileData.length,
            category: input.category,
          });

          return { success: true, fileId: (file as any).insertId, url };
        } catch (error) {
          console.error("[Files] Upload failed:", error);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "File upload failed",
          });
        }
      }),

    list: protectedProcedure
      .input(z.object({
        category: z.string().optional(),
        limit: z.number().min(1).max(100).default(20),
        offset: z.number().min(0).default(0),
      }))
      .query(async ({ ctx, input }) => {
        const userFiles = await getUserFiles(
          ctx.user.id,
          input.category,
          input.limit,
          input.offset
        );
        const total = await getFileCount(ctx.user.id, input.category);
        return { files: userFiles, total };
      }),

    delete: protectedProcedure
      .input(z.object({ fileId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        try {
          const result = await deleteFile(input.fileId, ctx.user.id);
          return result;
        } catch (error) {
          console.error("[Files] Delete failed:", error);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: error instanceof Error ? error.message : "File deletion failed",
          });
        }
      }),

    getDownloadUrl: protectedProcedure
      .input(z.object({ fileId: z.number() }))
      .query(async ({ ctx, input }) => {
        try {
          const file = await getFileById(input.fileId, ctx.user.id);
          if (!file) {
            throw new TRPCError({
              code: "NOT_FOUND",
              message: "File not found",
            });
          }

          const signedUrl = await storageGetSignedUrl(file.fileKey);
          return { url: signedUrl };
        } catch (error) {
          console.error("[Files] Get download URL failed:", error);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to generate download URL",
          });
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
