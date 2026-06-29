import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/*
 * POST /api/contact
 * Delivers contact form submissions to the address in CONTACT_EMAIL.
 * To change the destination, update CONTACT_EMAIL in .env.local — no code change needed.
 */
export async function POST(req: Request) {
  const body = await req.json();
  const { name, business, email, phone, service, message } = body as Record<string, string>;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const to = process.env.CONTACT_EMAIL;
  if (!to) {
    return NextResponse.json({ error: "Server misconfiguration: CONTACT_EMAIL not set." }, { status: 500 });
  }

  /* Transport — reads SMTP vars from .env.local */
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"The Zenith Point — Website" <${process.env.SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `New inquiry from ${name}${business ? ` — ${business}` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;color:#1a1a2e">
          <h2 style="margin:0 0 24px;color:#7B2FBE">New inquiry via TheZenithPoint.com</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#555;width:130px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            ${business ? `<tr><td style="padding:8px 0;color:#555">Business</td><td style="padding:8px 0;font-weight:600">${business}</td></tr>` : ""}
            <tr><td style="padding:8px 0;color:#555">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#7B2FBE">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:8px 0;color:#555">Phone</td><td style="padding:8px 0">${phone}</td></tr>` : ""}
            ${service ? `<tr><td style="padding:8px 0;color:#555">Service</td><td style="padding:8px 0">${service}</td></tr>` : ""}
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0"/>
          <p style="color:#555;margin:0 0 8px">Message</p>
          <p style="white-space:pre-wrap;margin:0">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
