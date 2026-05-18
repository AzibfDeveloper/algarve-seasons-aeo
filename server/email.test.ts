import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import {
  generateCustomerConfirmationEmail,
  generateAdminNotificationEmail,
  sendEmail,
} from "./_core/emailService";

describe("Email Service", () => {
  describe("generateCustomerConfirmationEmail", () => {
    it("generates valid HTML with customer name and service type", () => {
      const html = generateCustomerConfirmationEmail(
        "John Doe",
        "air-conditioning",
        "QUOTE-001"
      );

      expect(html).toContain("John Doe");
      expect(html).toContain("air-conditioning");
      expect(html).toContain("QUOTE-001");
      expect(html).toContain("Quote Request Received!");
      expect(html).toContain("<!DOCTYPE html>");
    });

    it("includes contact information in the email", () => {
      const html = generateCustomerConfirmationEmail(
        "Jane Smith",
        "solar",
        "QUOTE-002"
      );

      expect(html).toContain("+351 910 675 168");
      expect(html).toContain("info@algarveseasons.com");
      expect(html).toContain("Algarve Seasons");
    });

    it("includes next steps section", () => {
      const html = generateCustomerConfirmationEmail(
        "Test User",
        "heat-pump",
        "QUOTE-003"
      );

      expect(html).toContain("What happens next?");
      expect(html).toContain("analyze your property photos");
      expect(html).toContain("24 hours");
    });

    it("handles special characters in customer name", () => {
      const html = generateCustomerConfirmationEmail(
        "José da Silva",
        "multiple",
        "QUOTE-004"
      );

      expect(html).toContain("José da Silva");
    });
  });

  describe("generateAdminNotificationEmail", () => {
    it("generates valid HTML with all customer details", () => {
      const html = generateAdminNotificationEmail(
        "John Doe",
        "john@example.com",
        "+351 912 345 678",
        "air-conditioning",
        "villa",
        "250 m²",
        "Faro",
        "Needs AC installation",
        [],
        "QUOTE-001"
      );

      expect(html).toContain("John Doe");
      expect(html).toContain("john@example.com");
      expect(html).toContain("+351 912 345 678");
      expect(html).toContain("air-conditioning");
      expect(html).toContain("villa");
      expect(html).toContain("250 m²");
      expect(html).toContain("Faro");
      expect(html).toContain("Needs AC installation");
      expect(html).toContain("QUOTE-001");
    });

    it("includes admin dashboard link", () => {
      const html = generateAdminNotificationEmail(
        "Test",
        "test@example.com",
        "+351 900 000 000",
        "solar",
        "apartment",
        "100 m²",
        "Lagos",
        "",
        [],
        "QUOTE-002"
      );

      expect(html).toContain("View in Admin Dashboard");
      expect(html).toContain("algarvehvac-db7seyek.manus.space");
    });

    it("includes reply to customer link", () => {
      const html = generateAdminNotificationEmail(
        "Test",
        "customer@example.com",
        "+351 900 000 000",
        "heat-pump",
        "house",
        "150 m²",
        "Albufeira",
        "",
        [],
        "QUOTE-003"
      );

      expect(html).toContain("Reply to Customer");
      expect(html).toContain("mailto:customer@example.com");
    });

    it("includes photo gallery when photos are provided", () => {
      const photoUrls = [
        "https://example.com/photo1.jpg",
        "https://example.com/photo2.jpg",
      ];
      const html = generateAdminNotificationEmail(
        "Test",
        "test@example.com",
        "+351 900 000 000",
        "solar",
        "villa",
        "200 m²",
        "Portimão",
        "Solar installation",
        photoUrls,
        "QUOTE-004"
      );

      expect(html).toContain("Property Photos");
      expect(html).toContain("https://example.com/photo1.jpg");
      expect(html).toContain("https://example.com/photo2.jpg");
      expect(html).toContain("Property photo");
    });

    it("omits photo gallery section when no photos provided", () => {
      const html = generateAdminNotificationEmail(
        "Test",
        "test@example.com",
        "+351 900 000 000",
        "air-conditioning",
        "apartment",
        "80 m²",
        "Vilamoura",
        "",
        [],
        "QUOTE-005"
      );

      expect(html).not.toContain("Property Photos");
    });

    it("handles missing description gracefully", () => {
      const html = generateAdminNotificationEmail(
        "Test",
        "test@example.com",
        "+351 900 000 000",
        "heat-pump",
        "commercial",
        "500 m²",
        "Silves",
        "",
        [],
        "QUOTE-006"
      );

      expect(html).toContain("No additional description provided");
    });

    it("handles special characters in customer details", () => {
      const html = generateAdminNotificationEmail(
        "João & Maria",
        "joao.maria@example.com",
        "+351 912 345 678",
        "solar",
        "villa",
        "300 m²",
        "São Brás de Alportel",
        "Needs & wants solar",
        [],
        "QUOTE-007"
      );

      expect(html).toContain("João & Maria");
      expect(html).toContain("São Brás de Alportel");
      expect(html).toContain("Needs & wants solar");
    });
  });

  describe("sendEmail", () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it("returns true on successful email send", async () => {
      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        statusText: "OK",
      });
      global.fetch = mockFetch;

      const result = await sendEmail({
        to: "test@example.com",
        subject: "Test Subject",
        html: "<p>Test</p>",
      });

      expect(result).toBe(true);
      expect(mockFetch).toHaveBeenCalledOnce();
    });

    it("sends correct payload structure", async () => {
      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        statusText: "OK",
      });
      global.fetch = mockFetch;

      await sendEmail({
        to: "test@example.com",
        subject: "Test Subject",
        html: "<p>Test</p>",
        replyTo: "reply@example.com",
      });

      const callArgs = mockFetch.mock.calls[0];
      expect(callArgs[0]).toContain("/email/send");
      expect(callArgs[1]?.method).toBe("POST");

      const body = JSON.parse(callArgs[1]?.body as string);
      expect(body).toEqual({
        to: "test@example.com",
        subject: "Test Subject",
        html: "<p>Test</p>",
        replyTo: "reply@example.com",
        from: "noreply@algarveseasons.com",
      });
    });

    it("includes authorization header", async () => {
      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        statusText: "OK",
      });
      global.fetch = mockFetch;

      await sendEmail({
        to: "test@example.com",
        subject: "Test",
        html: "<p>Test</p>",
      });

      const callArgs = mockFetch.mock.calls[0];
      const headers = callArgs[1]?.headers as Record<string, string>;
      expect(headers["Authorization"]).toMatch(/^Bearer /);
    });

    it("returns false on failed email send", async () => {
      const mockFetch = vi.fn().mockResolvedValue({
        ok: false,
        statusText: "Internal Server Error",
      });
      global.fetch = mockFetch;

      const result = await sendEmail({
        to: "test@example.com",
        subject: "Test Subject",
        html: "<p>Test</p>",
      });

      expect(result).toBe(false);
    });

    it("returns false on network error", async () => {
      const mockFetch = vi.fn().mockRejectedValue(new Error("Network error"));
      global.fetch = mockFetch;

      const result = await sendEmail({
        to: "test@example.com",
        subject: "Test Subject",
        html: "<p>Test</p>",
      });

      expect(result).toBe(false);
    });

    it("handles missing replyTo gracefully", async () => {
      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        statusText: "OK",
      });
      global.fetch = mockFetch;

      await sendEmail({
        to: "test@example.com",
        subject: "Test Subject",
        html: "<p>Test</p>",
      });

      const callArgs = mockFetch.mock.calls[0];
      const body = JSON.parse(callArgs[1]?.body as string);
      expect(body.replyTo).toBeUndefined();
    });

    it("logs success message on successful send", async () => {
      const consoleLogSpy = vi.spyOn(console, "log");
      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        statusText: "OK",
      });
      global.fetch = mockFetch;

      await sendEmail({
        to: "test@example.com",
        subject: "Test Subject",
        html: "<p>Test</p>",
      });

      expect(consoleLogSpy).toHaveBeenCalledWith(
        expect.stringContaining("Email sent successfully")
      );
    });

    it("logs error message on failed send", async () => {
      const consoleErrorSpy = vi.spyOn(console, "error");
      const mockFetch = vi.fn().mockResolvedValue({
        ok: false,
        statusText: "Server Error",
      });
      global.fetch = mockFetch;

      await sendEmail({
        to: "test@example.com",
        subject: "Test Subject",
        html: "<p>Test</p>",
      });

      expect(consoleErrorSpy).toHaveBeenCalled();
      const errorCall = consoleErrorSpy.mock.calls[0]?.[0] as string;
      expect(errorCall).toContain("Failed to send email");
      expect(errorCall).toContain("test@example.com");
    });
  });
});
