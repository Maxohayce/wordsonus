// app/api/subscribe/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import mailchimp from "@mailchimp/mailchimp_marketing";

// export async function POST(req: NextRequest) {
//   const body = await req.json();
//   const { email } = body;

//   if (!email || !email.includes("@")) {
//     return NextResponse.json(
//       { message: "Invalid email address" },
//       { status: 400 }
//     );
//   }

//   const API_KEY = process.env.MAILCHIMP_API_KEY!;
//   const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
//   const DATACENTER = API_KEY.split("-")[1];

//   const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       Authorization: `apikey ${API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email_address: email,
//       status: "subscribed",
//     }),
//   });

//   if (response.status >= 400) {
//     const errorData = await response.json();
//     return NextResponse.json(
//       { message: errorData.detail || "Error subscribing" },
//       { status: 400 }
//     );
//   }

//   return NextResponse.json(
//     { message: "Subscribed successfully!" },
//     { status: 201 }
//   );
// }

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
  } catch (err: any) {
    console.error("Mailchimp error:", err);
    return NextResponse.json(
      { error: err?.response?.body?.detail || "Something went wrong" },
      { status: 500 }
    );
  }
}
