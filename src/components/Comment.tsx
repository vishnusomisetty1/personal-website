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

  console.log("commetn conent", content);

  return (
    <div className="my-3 rounded-lg border border-navy-100 bg-white p-4 text-left shadow-sm">
      <h3 className="mb-1 text-sm font-medium text-navy-600">{name}</h3>
      <h4 className="mb-2 leading-relaxed">{content}</h4>
      <div className="flex flex-row items-center space-x-2">
        <button
          onClick={() => handleClick()}
          className="text-navy-600 hover:text-navy-700"
        >
          <ThumbsUpFilled />
        </button>
        <p className="text-sm text-navy-900/80">{likes}</p>
      </div>
    </div>
  );
}
