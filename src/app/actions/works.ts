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
}

export async function showWork(id: any) {
  await prisma.work.findFirst({
    where: {
      id: id
    }
  });
}
export async function showAllWorks() {
  const works = await prisma.work.findMany();
  return works
}

export async function editWork(id: any, content: any) {
  await prisma.work.update({
    where: {
      id: id
    },
    data: {
      title: content['title'],
      year: content['year'],
    }
  })
}

export async function deleteWork(id: any) {
  await prisma.work.delete({
    where: {
      id: id
    }
  })
}