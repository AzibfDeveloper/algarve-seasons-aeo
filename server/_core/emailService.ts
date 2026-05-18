import { ENV } from "./env";

export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

/**
 * Send email using Manus built-in email service via Forge API
 */
export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  try {
    const response = await fetch(`${ENV.forgeApiUrl}/email/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ENV.forgeApiKey}`,
      },
      body: JSON.stringify({
        to: payload.to,
        subject: payload.subject,
        html: payload.html,
        replyTo: payload.replyTo,
        from: "noreply@algarveseasons.com",
      }),
    });

    if (!response.ok) {
      console.error(`[Email Service] Failed to send email to ${payload.to}:`, response.statusText);
      return false;
    }

    console.log(`[Email Service] Email sent successfully to ${payload.to}`);
    return true;
  } catch (error) {
    console.error(`[Email Service] Error sending email to ${payload.to}:`, error);
    return false;
  }
}

/**
 * Generate customer confirmation email HTML
 */
export function generateCustomerConfirmationEmail(
  customerName: string,
  serviceType: string,
  quoteId: string
): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; margin: 20px 0; border-radius: 8px; }
          .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; }
          .button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin: 10px 0; }
          h2 { color: #667eea; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Quote Request Received!</h1>
          </div>
          
          <div class="content">
            <p>Dear ${customerName},</p>
            
            <p>Thank you for submitting your quote request for <strong>${serviceType}</strong> services. We've received your information and property photos.</p>
            
            <p><strong>Quote Reference Number:</strong> ${quoteId}</p>
            
            <p>Our team will review your request and contact you within 24 hours with a detailed quote and recommendations tailored to your property.</p>
            
            <h3>What happens next?</h3>
            <ul>
              <li>Our experts will analyze your property photos and requirements</li>
              <li>We'll prepare a customized quote with pricing and timeline</li>
              <li>You'll receive a call or email with our recommendations</li>
              <li>We're available for any questions you may have</li>
            </ul>
            
            <p>If you have any urgent questions, please don't hesitate to contact us:</p>
            <p><strong>Phone:</strong> +351 910 675 168</p>
            <p><strong>Email:</strong> info@algarveseasons.com</p>
          </div>
          
          <div class="footer">
            <p>Algarve Seasons | Air Conditioning, Solar Energy & Heat Pumps</p>
            <p>Serving the entire Algarve region since 2016</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Generate admin notification email HTML with customer details and property photos
 */
export function generateAdminNotificationEmail(
  customerName: string,
  customerEmail: string,
  customerPhone: string,
  serviceType: string,
  propertyType: string,
  propertySize: string,
  location: string,
  description: string,
  photoUrls: string[],
  quoteId: string
): string {
  const photoGallery = photoUrls
    .map(
      (url) => `
    <div style="margin: 10px 0;">
      <img src="${url}" alt="Property photo" style="max-width: 300px; border-radius: 4px; border: 1px solid #ddd;">
    </div>
  `
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 800px; margin: 0 auto; padding: 20px; }
          .header { background: #2c3e50; color: white; padding: 20px; border-radius: 8px; text-align: center; }
          .section { padding: 15px; background: #ecf0f1; margin: 15px 0; border-radius: 4px; border-left: 4px solid #667eea; }
          .section h3 { margin-top: 0; color: #667eea; }
          .customer-info { background: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 4px; margin: 10px 0; }
          .customer-info p { margin: 8px 0; }
          .label { font-weight: bold; color: #667eea; }
          .photos { margin: 20px 0; }
          .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 20px; }
          .action-button { display: inline-block; background: #667eea; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 10px 5px 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎯 NEW QUOTE REQUEST</h1>
            <p>Quote ID: ${quoteId}</p>
          </div>
          
          <div class="section">
            <h3>Customer Information</h3>
            <div class="customer-info">
              <p><span class="label">Name:</span> ${customerName}</p>
              <p><span class="label">Email:</span> <a href="mailto:${customerEmail}">${customerEmail}</a></p>
              <p><span class="label">Phone:</span> <a href="tel:${customerPhone}">${customerPhone}</a></p>
            </div>
          </div>
          
          <div class="section">
            <h3>Service & Property Details</h3>
            <p><span class="label">Service Type:</span> ${serviceType}</p>
            <p><span class="label">Property Type:</span> ${propertyType}</p>
            <p><span class="label">Property Size:</span> ${propertySize}</p>
            <p><span class="label">Location:</span> ${location}</p>
            <p><span class="label">Description:</span></p>
            <p>${description || "No additional description provided"}</p>
          </div>
          
          ${
            photoUrls.length > 0
              ? `
          <div class="section">
            <h3>Property Photos</h3>
            <div class="photos">
              ${photoGallery}
            </div>
          </div>
          `
              : ""
          }
          
          <div style="text-align: center; margin: 20px 0;">
            <a href="https://algarvehvac-db7seyek.manus.space/#/admin" class="action-button">View in Admin Dashboard</a>
            <a href="mailto:${customerEmail}" class="action-button">Reply to Customer</a>
          </div>
          
          <div class="footer">
            <p>This is an automated notification from Algarve Seasons Quote System</p>
            <p>Please respond to the customer within 24 hours</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
