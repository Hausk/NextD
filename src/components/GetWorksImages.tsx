import { PrismaClient } from '@prisma/client';
import Image from "next/image";
const prisma = new PrismaClient()

export default async function GetWorksRelatedImages({workId}: any) {
    const notes = await prisma.image.findMany({
        where: {
            workId: workId
        }
    });
    // Display notes in React component
    return (
        <>
            {notes.map((image, index) => (
                <Image
                    key={index}
                    src={image.path}
                    alt="slide"
                    width={100}
                    height={100}
                    className="w-full h-full rounded-lg"
              />
        ))}
        </>
    )
}