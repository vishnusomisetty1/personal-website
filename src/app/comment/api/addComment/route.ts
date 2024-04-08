// Assuming you have a service called `CommentService` similar to `HabitService` in your first example
import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Define the structure of your expected request body
interface ReqBody {
  name: string;
  content: string;
}

export async function POST(request: NextRequest) {
  const body: ReqBody = await request.json();
  const { name, content } = body;

  try {
    const newComment = await prisma.comment.create({
      data: {
        name,
        content,
      },
    });
    return new NextResponse(JSON.stringify(newComment), { status: 200 });
  } catch (error) {
    console.error("Failed to add comment:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to add comment" }),
      { status: 500 },
    );
  }
}
