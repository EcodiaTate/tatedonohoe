import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, idea } = await req.json();

  // configure however you like (SMTP, Resend, etc.)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Tate" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: `New idea from ${email}`,
    text: idea,
  });

  return NextResponse.json({ ok: true });
}
