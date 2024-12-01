import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface LikeProp {
  id: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: LikeProp = await request.json();
    const { id } = body;

    const comment = await prisma.comment.findUnique({
      where: {
        id: id,
      },
    });

    if (comment) {
      await prisma.comment.update({
        where: { id: id },
        data: {
          likes: {
            increment: 1,
          },
        },
      });

      return new NextResponse(
        JSON.stringify({ message: "Comment likes updated successfully" }),
        { status: 200 },
      );
    } else {
      return new NextResponse(JSON.stringify({ error: "Comment not found" }), {
        status: 404,
      });
    }
  } catch (error) {
    console.error("Failed to update likes:", error);
    return new NextResponse(
      JSON.stringify({
        error: "Service temporarily unavailable. Please try again later.",
      }),
      { status: 503 },
    );
  }
}
