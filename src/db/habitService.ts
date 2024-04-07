// Assuming this file is located at /lib/HabitService.ts or a similar path

import { PrismaClient } from "@prisma/client";

export interface Habit {
  id: number;
  workout: boolean;
  typingPractice: boolean;
  coding: boolean;
  reading: boolean;
}

export class HabitService {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // Function to get all Habits
  async getAllHabits(): Promise<Habit[]> {
    return await this.prisma.habit.findMany();
  }

  // Function to add a new Habit
  async addHabit(
    workout: boolean,
    typingPractice: boolean,
    coding: boolean,
    reading: boolean,
  ): Promise<Habit> {
    return await this.prisma.habit.create({
      data: {
        workout,
        typingPractice,
        coding,
        reading,
      },
    });
  }

  // Function to update an existing Habit
  async updateHabit(
    id: number,
    workout: boolean,
    typingPractice: boolean,
    coding: boolean,
    reading: boolean,
  ): Promise<Habit> {
    return await this.prisma.habit.update({
      where: { id },
      data: {
        workout,
        typingPractice,
        coding,
        reading,
      },
    });
  }

  // New function to bulk update habits
  async updateHabits(habits: Habit[]): Promise<Habit[]> {
    // Create an array of update promises
    const updatePromises = habits.map((habit) => {
      return this.prisma.habit.update({
        where: { id: habit.id },
        data: habit,
      });
    });

    // Wait for all update promises to resolve
    return await Promise.all(updatePromises);
  }
}
