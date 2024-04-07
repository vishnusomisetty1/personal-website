import { ThumbsUp } from "@carbon/icons-react";

interface CommentProps {
  name: string;
  content: string;
  likes: number;
  id: string; // Assuming likes is a number. Adjust if necessary
}

// Use the interface with your component
export default function Comment({ id, name, content, likes }: CommentProps) {
  return (
    <div className="border p-2 text-left">
      <h3 className="text-sm text-neutral-300">{name}</h3>
      <h4>{content}</h4>
      <div className="flex flex-row items-center space-x-2">
        <ThumbsUp />
        <p>{likes}</p>
      </div>
    </div>
  );
}
