import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail.utils";

export async function POST(request: Request) {
  try {
    const { fullName, email, phone, message } = await request.json();

    await sendEmail({
      senderEmail: email,
      senderName: fullName,
      senderPhone: phone,
      senderMessage: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
