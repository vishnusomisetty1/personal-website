import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Habit {
  // It's more conventional to name the interface in singular form if it represents a single item
  id?: string; // Making id optional to support create operation where id might not be present
  date: string;
  workout: boolean;
  typingPractice: boolean;
  coding: boolean;
  reading: boolean;
  toDelete?: boolean; // Assuming there's a flag to indicate deletion, made optional
}

export async function POST(request: NextRequest) {
  const body: { currentHabits: Habit[] } = await request.json();

  for (let i = 0; i < body.currentHabits.length; i++) {
    const { toDelete, ...habitData } = body.currentHabits[i];

    console.log("\n\n\n\nProcessing habit:", toDelete, habitData, i);
    try {
      if (habitData.id === undefined) {
        await prisma.habit.create({ data: habitData });
      } else if (toDelete === true) {
        await prisma.habit.delete({
          where: { id: habitData.id },
        });
      } else {
        await prisma.habit.update({
          where: { id: habitData.id },
          data: habitData,
        });
      }
    } catch (error) {
      console.error("Operation error:", error);
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
