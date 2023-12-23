import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
async function getData() {
  const result = await prisma.work.findFirst({where: {id: 1}})
  return result
}
export default async function Page() {
  const work = await getData();
  return(
    <>
      <h1>{work?.title}</h1>
    </>
  )
}