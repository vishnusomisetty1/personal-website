// Assuming you have a service called `CommentService` similar to `HabitService` in your first example
import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Define the structure of your expected request body
interface ReqBody {
  name: string;
  content: string;
}

export async function POST(request: NextRequest) {
  // Ensure the body is parsed as JSON
  const body: ReqBody = await request.json();
  const { name, content } = body;

  try {
    // Using your Prisma client to interact with your database
    const newComment = await prisma.comment.create({
      data: {
        name,
        content,
        // `likes` will automatically be set to 0 as per your Prisma model definition
      },
    });
    // Return a JSON response with the new comment
    return new NextResponse(JSON.stringify(newComment), { status: 200 });
  } catch (error) {
    console.error("Failed to add comment:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to add comment" }),
      { status: 500 },
    );
  }
}

// Handle any requests that aren't POST
export function middleware(request: NextRequest) {
  if (request.method !== "POST") {
    return new NextResponse(`Method ${request.method} Not Allowed`, {
      status: 405,
      headers: { Allow: "POST" },
    });
  }
}
