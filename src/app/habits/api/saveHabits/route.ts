import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Habits {
  id: string;
  date: string;
  workout: boolean;
  typingPractice: boolean;
  coding: boolean;
  reading: boolean;
}

export async function POST(request: NextRequest) {
  const body: { currentHabits: Habits[] } = await request.json();

  for (let i = 0; i < body.currentHabits.length; i++) {
    // If 'id' is not provided, indicating a create operation
    if (body.currentHabits[i].id === undefined) {
      try {
        const createdHabit = await prisma.habit.create({
          data: body.currentHabits[i],
        });
      } catch (error) {
        console.error("Create error:", error);
      }
    } else {
      // 'id' is provided, indicating an update operation
      try {
        const updatedHabit = await prisma.habit.update({
          where: { id: body.currentHabits[i].id },
          data: body.currentHabits[i],
        });
      } catch (error) {
        console.error("Update error:", error);
      }
    }
  }

  return new NextResponse(
    JSON.stringify({
      message: "Operation completed successfully",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}
