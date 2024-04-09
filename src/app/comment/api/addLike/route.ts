import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface LikeProp {
  id: string;
}

export async function POST(request: NextRequest) {
  // Parsing the request body to get the comment ID
  const body: LikeProp = await request.json();
  const { id } = body;

  // Fetching a specific comment based on the ID
  const comment = await prisma.comment.findUnique({
    where: {
      id: id, // Use the ID from the request body
    },
  });

  // Check if the comment exists before attempting to update
  if (comment) {
    const updatedLikes = await prisma.comment.update({
      where: {
        id: id,
      },
      data: {
        likes: {
          increment: 1,
        },
      },
    });

    // Returning a success response
    return new NextResponse(
      JSON.stringify({ message: "Comment likes updated successfully" }),
      { status: 200 },
    );
  } else {
    // If the comment doesn't exist, return a 404 response
    return new NextResponse(JSON.stringify({ error: "Comment not found" }), {
      status: 404,
    });
  }
}
