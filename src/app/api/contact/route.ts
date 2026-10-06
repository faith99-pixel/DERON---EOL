import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, practice, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Deron & Eol Website" <${process.env.SMTP_USER}>`,
    to: "deroneol22@gmail.com",
    replyTo: email,
    subject: `New Enquiry${practice ? ` — ${practice}` : ""} from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;color:#0d0d15">
        <h2 style="border-bottom:2px solid #9a8141;padding-bottom:8px">New Client Enquiry</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#9a8141;font-size:12px;text-transform:uppercase;letter-spacing:2px">Name</td><td style="padding:8px 0">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#9a8141;font-size:12px;text-transform:uppercase;letter-spacing:2px">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#9a8141;font-size:12px;text-transform:uppercase;letter-spacing:2px">Phone</td><td style="padding:8px 0">${phone || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#9a8141;font-size:12px;text-transform:uppercase;letter-spacing:2px">Practice Area</td><td style="padding:8px 0">${practice || "—"}</td></tr>
        </table>
        <h3 style="color:#9a8141;font-size:12px;text-transform:uppercase;letter-spacing:2px;margin-top:24px">Matter Outline</h3>
        <p style="line-height:1.7;white-space:pre-wrap">${message}</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
