"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function CommentBox({ postId }: { postId: number }) {
  const [name, setName] = useState("");
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Current postId:", postId);
    if (!postId) return;

    fetch(`https://blogs.wordsonus.ng/wp-json/wp/v2/comments?post=${postId}`)
      .then((res) => res.json())
      .then(setComments)
      .catch(console.error);
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !comment) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("/api/submit-comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postId,
          name,
          comment,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setName("");
        setComment("");
        setError("");
      } else {
        const data = await res.json();
        setError(data.error || "Failed to post comment.");
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="my-8">
      {submitted ? (
        <p className="text-green-600">
          Thank you! Your comment has been submitted.
        </p>
      ) : (
        <div className="  px-6 sm:px-12 md:px-24 lg:px-36">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex flex-col items-start justify-between py-8">
              <h5>Join the Conversation</h5>
              <div className="flex flex-col md:flex-row w-full md:items-start justify-start mt-4 ">
                <Image
                  alt=" strategy"
                  src="/images/ellipse 30.png"
                  height={50}
                  width={50}
                  className="mb-4"
                />
                <div className="w-full flex flex-col md:ml-8">
                  <input
                    className="w-full border px-3 py-2 rounded mb-4"
                    type="text"
                    placeholder="Please enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <textarea
                    className="w-full border-2 px-3 py-2 rounded mb-4"
                    rows={4}
                    placeholder="Leave a comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#800117] text-white px-4 py-2 rounded-md md:w-[20rem] self-end hover:bg-red-700"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          <h5>Comments</h5>
          <ul className="space-y-4">
            {Array.isArray(comments) ? (
              comments.map((c) => (
                <li key={c.id} className="border rounded p-4">
                  <p className="font-semibold">{c.author_name}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(c.date).toLocaleDateString()}
                  </p>
                  <p dangerouslySetInnerHTML={{ __html: c.content.rendered }} />
                </li>
              ))
            ) : (
              <li className="text-red-500">Failed to load comments.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
