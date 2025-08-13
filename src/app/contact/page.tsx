// pages/contact.js or components/ContactForm.js
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    contactMessage: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          businessName: "",
          contactMessage: "",
        });
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      console.log(error);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-60 mb-40 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="businessName"
          placeholder="Business Name"
          className="w-full border p-2 rounded"
          value={formData.businessName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="contactMessage"
          placeholder="How can we help you?"
          className="w-full border p-2 rounded"
          value={formData.contactMessage}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-[#800117] text-white p-2 rounded-3xl hover:text-[#800117] hover:bg-white border-2 border-[#800117]"
        >
          Submit
        </button>
      </form>
      {status && <p className="mt-4 text-sm">{status}</p>}
    </div>
  );
}
