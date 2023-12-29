import WorkSlide from '@/components/clients/Slide';
/*import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function works() { 
  return await prisma.work.findMany()
}*/
export default async function Page() {
  const lists = [
    {id:1, title: 'test', year: '2023', pinnedImage: 'https://fastly.picsum.photos/id/985/200/200.jpg?hmac=-oC6YfQiGmm3Fyl5kVCag3-Z0VUHT0pRLIziGH1c4KU'},
    {id:2, title: 'test', year: '2023', pinnedImage: 'https://fastly.picsum.photos/id/985/200/200.jpg?hmac=-oC6YfQiGmm3Fyl5kVCag3-Z0VUHT0pRLIziGH1c4KU'},
    {id:3, title: 'test', year: '2023', pinnedImage: 'https://fastly.picsum.photos/id/985/200/200.jpg?hmac=-oC6YfQiGmm3Fyl5kVCag3-Z0VUHT0pRLIziGH1c4KU'},
    {id:4, title: 'test', year: '2023', pinnedImage: 'https://fastly.picsum.photos/id/985/200/200.jpg?hmac=-oC6YfQiGmm3Fyl5kVCag3-Z0VUHT0pRLIziGH1c4KU'},
    {id:5, title: 'test', year: '2023', pinnedImage: 'https://fastly.picsum.photos/id/985/200/200.jpg?hmac=-oC6YfQiGmm3Fyl5kVCag3-Z0VUHT0pRLIziGH1c4KU'}
  ]
  return (
    <>
      <WorkSlide items={lists} />
    </>
  )
}