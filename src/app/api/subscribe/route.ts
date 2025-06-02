import { NextRequest, NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_SERVER_PREFIX!,
});

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID!,
      {
        email_address: email,
        status: "subscribed",
      }
    );

    return NextResponse.json(
      { message: "Subscribed successfully", response },
      { status: 200 }
    );
  } catch (err) {
    console.error("Mailchimp error:", err);
    return NextResponse.json(
      { error: err?.response?.body?.detail || "Something went wrong" },
      { status: 500 }
    );
  }
}
