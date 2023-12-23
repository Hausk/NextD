'use server'
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
export const prisma = new PrismaClient();

export async function createWork(content: string) {
    await prisma.work.create({
      data: {
        title: content,
        year: '2023',
      },
    });
    revalidatePath('/works')
  }