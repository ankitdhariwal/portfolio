import type { ContactFormData } from "@/types";

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL ?? "ankitdhariwal2@gmail.com";

  if (!apiKey) {
    console.error("RESEND_API_KEY not set");
    return { success: false, error: "Email service not configured" };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: toEmail,
      subject: `[Portfolio] ${data.subject}`,
      html: `
        <div style="font-family: monospace; background: #020008; color: #F0F0FF; padding: 32px; border-radius: 12px; border: 1px solid rgba(0,212,255,0.2);">
          <h2 style="color: #0EA5E9; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="color: #8892A4; padding: 8px 0; width: 120px;">From:</td>
              <td style="color: #F0F0FF;">${data.name}</td>
            </tr>
            <tr>
              <td style="color: #8892A4; padding: 8px 0;">Email:</td>
              <td style="color: #0EA5E9;"><a href="mailto:${data.email}" style="color: #0EA5E9;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="color: #8892A4; padding: 8px 0;">Subject:</td>
              <td style="color: #F0F0FF;">${data.subject}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.08);">
            <p style="color: #8892A4; margin-bottom: 12px;">Message:</p>
            <p style="color: #F0F0FF; white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Email send error:", err);
    return { success: false, error: "Failed to send email" };
  }
}
