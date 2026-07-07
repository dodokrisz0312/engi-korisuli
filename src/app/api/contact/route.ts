import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  parentName: string;
  email: string;
  phone?: string;
  childAge: string;
  programs: string[];
  message: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.email || !body.parentName || !body.childAge || !body.message) {
      return NextResponse.json({ message: "Hiányzó kötelező mezők." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Engi Korisuli weboldal" <${process.env.SMTP_FROM}>`,
      to: process.env.CONTACT_TO || "engiklara@gmail.com",
      replyTo: body.email,
      subject: "Új jelentkezés / érdeklődés az Engi Korisuli weboldalról",
      text: `
Új jelentkezés / érdeklődés érkezett.

Szülő neve: ${body.parentName}
E-mail: ${body.email}
Telefon: ${body.phone || "-"}
Gyermek / gyermekek kora: ${body.childAge}
Érdeklődő oktatás: ${body.programs.length ? body.programs.join(", ") : "-"}

Üzenet:
${body.message}
      `,
    });

    return NextResponse.json({ message: "Sikeres küldés." });
  } catch {
    return NextResponse.json({ message: "Sikertelen küldés." }, { status: 500 });
  }
}
