// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Extend the NodeJS global type with the prisma client to avoid TypeScript errors
declare global {
  // Allow global 'var' declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
