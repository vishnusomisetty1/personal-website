"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddComment() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("/comment/api/addComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, content }),
    });

    if (response.ok) {
      setName("");
      setContent("");
    } else {
      console.error("Failed to add comment");
    }
    router.refresh();
  };

  return (
    <div className="my-6 rounded-lg border border-navy-100 bg-white p-6 shadow-sm">
      <form
        className="align-left space-y-4 text-navy-900"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="block w-full rounded-md border border-navy-200 bg-white p-3 text-navy-900 placeholder-navy-200 shadow-sm focus:border-navy-400 focus:outline-none"
        />
        <textarea
          placeholder="Write a comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="block w-full rounded-md border border-navy-200 bg-white p-3 text-navy-900 placeholder-navy-200 shadow-sm focus:border-navy-400 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-md bg-navy-600 px-4 py-2 text-white shadow-sm transition-colors hover:bg-navy-700"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
}
