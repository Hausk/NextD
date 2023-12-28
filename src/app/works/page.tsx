"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react"
import { Parallax } from "swiper/modules";
import React, { useEffect, useRef, useState } from 'react';
const elements = Array.from({length: 10}, (_, index) => {
  <Image key={index} src={'https://picsum.photos/200/300?random=' + index} width={100} height={100} alt='random'/>
})
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

import 'swiper/css';
import GetWorksRelatedImages from '@/components/GetWorksImages';

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Page() {
  const randomImage = `https://picsum.photos/400/400?random=1`;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slideVariants = {
      hidden: { x: "100%" },
      visible: { x: 0 },
  };

  const img1 = 'https://fastly.picsum.photos/id/454/400/400.jpg?hmac=gNa9-nZrP5LIX1bSSxqo6wP-1wBpQQE18rEh3dlTeZk'
  const img2 = 'https://fastly.picsum.photos/id/575/400/400.jpg?hmac=dS8X4b6zSoqMLuN37UirCnpHt3TGQ7IPMILoxuDTd1A'
  const img3 = 'https://fastly.picsum.photos/id/523/400/400.jpg?hmac=PedKFy24KWQMh9s22TfdeaV6h8AeNI2TJHIYEuE8pKQ'
  const img4 = 'https://fastly.picsum.photos/id/664/400/400.jpg?hmac=1J86tomquTup08smi7VP7k4bYCOaVxcDfE0haNsOnMQ'
  const img5 = 'https://fastly.picsum.photos/id/728/400/400.jpg?hmac=xtWGyeD7CpdTO7SA7QLBExpmf6QqW6yuHb9Ase_-6z0'

  const [lists, setLists] = useState([
      { id: 1, title: "Lisbonne", year: "2023", img: img1, quantity: 50 },
      { id: 1, title: "Portugal", year: "2023", img: img2, quantity: 10 },
      { id: 1, title: "Italie", year: "2022", img: img3, quantity: 22 },
      { id: 1, title: "France", year: "2022", img: img4, quantity: 41 },
      { id: 1, title: "Porto", year: "2021", img: img5, quantity: 105 },
  ]);
  const galleryList = [1,2,3,4,5,6,7,8,9]
    const handleSlideChange = (swiper: any) => {
      setCurrentSlide(swiper.activeIndex);
  };
  // Size of window
  const size = useWindowSize();
  return (
    <>
      <div className="h-screen overflow-hidden bg-gradient-to-tr from-slate-800 to-slate-950">
        <Swiper
          onSlideChange={handleSlideChange}
          pagination={{ dynamicBullets: true }}
          modules={[Parallax]}
          spaceBetween={0}
          centeredSlides={true}
          direction='horizontal'
          slidesPerView={1}
          loop={true}
          parallax={true}
          className="h-screen z-100 w-screen m-auto"
        >
          {lists.map((item, index) => (
            <SwiperSlide key={index} className="w-full flex relative">
              <div className="w-[100%] relative h-screen md:flex">
                <Image
                  className="w-[90vw] md:w-[40vw] my-4 mx-auto md:m-auto rounded-lg"
                  src={item.img}
                  alt="slide"
                  width={1000}
                  height={1000}
                  data-swiper-parallax="0"
                />
                <div className="m-auto w-[90%] md:w-[40vw] flex flex-col">
                  <p className="text-center font-medium text-5xl text-white rounded-sm" data-swiper-parallax={size.width < size.height ? '-500' : '-200'}>
                      {item.title} {item.year}
                  </p>
                  <div id="photobox" className="w-[100%] my-3 md:my-6 grid grid-cols-3 md:grid-cols-3 gap-4">
                    <GetWorksRelatedImages workId={item.id} />
                  </div>
                  <p className="text-center font-medium text-3xl text-white rounded-sm" data-swiper-parallax={size.width < size.height ? '-500' : '-200'}>
                      Voir plus
                  </p>
                </div>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
