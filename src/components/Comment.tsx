"use client";

import { ThumbsUpFilled } from "@carbon/icons-react";
import { useRouter } from "next/navigation";

interface CommentProps {
  name: string;
  content: string;
  likes: number;
  id: string;
}

export default function Comment({ id, name, content, likes }: CommentProps) {
  const router = useRouter();

  async function handleClick() {
    const response = await fetch("/comment/api/addLike", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    router.refresh();
  }

  return (
    <div className="border p-2 text-left">
      <h3 className="text-sm text-neutral-300">{name}</h3>
      <h4>{content}</h4>
      <div className="flex flex-row items-center space-x-2">
        <button onClick={() => handleClick()} className="hover:text-blue-500">
          <ThumbsUpFilled />
        </button>
        <p>{likes}</p>
      </div>
    </div>
  );
}
