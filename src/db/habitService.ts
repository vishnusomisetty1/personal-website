import { PrismaClient } from "@prisma/client";

export class HabitService {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // Function to get all Habits
  async getAllHabits() {
    return await this.prisma.habit.findMany();
  }

  // Function to add a new Habit
  async addHabit(
    workout: boolean,
    typingPractice: boolean,
    coding: boolean,
    reading: boolean,
  ) {
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
  ) {
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
}
