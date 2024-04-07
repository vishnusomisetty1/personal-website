import { HabitService } from "@/db/habitService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(Request: NextRequest) {
  const habitService = new HabitService();
  const data = await habitService.getAllHabits();
  return NextResponse.json({ habits: data });
}
