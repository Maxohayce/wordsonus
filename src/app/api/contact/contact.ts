import type { NextApiRequest, NextApiResponse } from "next";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_SERVER_PREFIX!,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, businessName, contactMessage } = req.body;

    if (!name || !email || !businessName || !contactMessage) {
      return res.status(400).json({ message: "All fields are required." });
    }

    try {
      // ✅ Replace with your Mailchimp audience/list ID
      const listId = process.env.MAILCHIMP_LIST_ID as string;

      // Send to Mailchimp audience
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name,
          LNAME: businessName, // Or add a custom field in Mailchimp
          MESSAGE: contactMessage, // Custom merge field for the message
        },
      });

      console.log("Mailchimp API Response:", response);

      return res
        .status(200)
        .json({ message: "Contact details sent to Mailchimp successfully." });
    } catch (error: any) {
      console.error("Mailchimp Error:", error);
      return res
        .status(500)
        .json({ message: "Error sending to Mailchimp", error: error.message });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
