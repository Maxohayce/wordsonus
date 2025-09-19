import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_SERVER_PREFIX!,
});

// POST handler for /api/contact
export async function POST(req: Request) {
  try {
    const { name, email, businessName, contactMessage } = await req.json();

    if (!name || !email || !businessName || !contactMessage) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID!,
      {
        email_address: email,
        status: "subscribed",
        tags: ["Contact-us"],
        merge_fields: {
          FNAME: name,
          LNAME: businessName,
          MESSAGE: contactMessage,
        },
      }
    );

    console.log("Mailchimp API Response:", response);

    return NextResponse.json(
      { message: "Contact details sent to Mailchimp successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Mailchimp Error:", error.response?.body || error.message);
    return NextResponse.json(
      { message: "Error sending to Mailchimp", error: error.message },
      { status: 500 }
    );
  }
}
