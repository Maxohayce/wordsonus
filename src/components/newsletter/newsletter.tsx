"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        setStatus(data.error || "Subscription failed.");
      } else {
        setStatus("Successfully subscribed!");
        setEmail("");
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus("Something went wrong.");
    }
  };

  return (
    <section className="flex flex-col xl:flex-row justify-around items-center bg-[#800117] h-72 px-4 xl:px-32">
      <div className="flex flex-col justify-start h-20 w-full text-white xl:w-1/2">
        <p className="text-xl text-start">STAY UP TO DATE</p>
        <h3 className="text-4xl mt-2">Subscribe to our Newsletter</h3>
      </div>
      <form className="w-full xl:w-1/2 flex" onSubmit={handleSubmit}>
        <input
          type="email"
          className="p-5 w-2/3"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="p-5 bg-black text-white w-1/3 xl:w-52">
          Subscribe
        </button>
      </form>
      {status && <p className="text-white mt-4">{status}</p>}
    </section>
  );
}
