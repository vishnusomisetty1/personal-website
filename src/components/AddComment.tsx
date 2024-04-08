"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddComment() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    console.log("hsd");

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
    <div>
      <form
        className="align-left space-y-4 border-2 border-gray-300 bg-transparent p-4 text-white"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="block w-full rounded-md border-2 border-gray-200 bg-transparent p-2 text-white placeholder-gray-400"
        />
        <textarea
          placeholder="Write a comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="block w-full rounded-md border-2 border-gray-200 bg-transparent p-2 text-white placeholder-gray-400"
        />
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
}
