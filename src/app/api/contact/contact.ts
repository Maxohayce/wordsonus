export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, businessName } = req.body;

    if (!name || !email || !businessName) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // TODO: Send email or store to database
    console.log("Received contact form:", { name, email, businessName });

    return res.status(200).json({ message: "Contact details received." });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
