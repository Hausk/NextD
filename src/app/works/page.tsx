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
  const imgUrls = numbers.map((_, index) => `https://picsum.photos/200/300?random=${index}`);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slideVariants = {
      hidden: { x: "100%" },
      visible: { x: 0 },
  };

  const img1 = 'https://fastly.picsum.photos/id/610/400/600.jpg?hmac=lBzINTZQOsnRP3X3_L5t3gvPWyj9z8tLL4IkvSn48x0'
  const img2 = 'https://fastly.picsum.photos/id/694/400/600.jpg?hmac=lKkl78L9Lb2Mw4DJ2f-Yw4gyYt1cbQObNszqiAJto4E'
  const img3 = 'https://fastly.picsum.photos/id/167/400/600.jpg?hmac=IaHo-3Pn-iSsjtRY7DCyw5VvorKVSSERQSgdD7T1xHw'
  const img4 = 'https://fastly.picsum.photos/id/550/400/600.jpg?hmac=BVOnFTLer0NJBfa6eszNm4RLeEfWPVcAQ7GOrGTqT7w'
  const img5 = 'https://fastly.picsum.photos/id/119/400/600.jpg?hmac=CQUOkA4wYD1HbPxsyd254_MO7AG8M5I1xFtr404s-SY'

  const [lists, setLists] = useState([
      { title: "Lisbonne", year: "2023", img: img1, quantity: 50 },
      { title: "Portugal", year: "2023", img: img2, quantity: 10 },
      { title: "Italie", year: "2022", img: img3, quantity: 22 },
      { title: "France", year: "2022", img: img4, quantity: 41 },
      { title: "Porto", year: "2021", img: img5, quantity: 105 },
  ]);
    const handleSlideChange = (swiper: any) => {
      setCurrentSlide(swiper.activeIndex);
  };
  // Size of window
  const size = useWindowSize();
  return (
    <>
      <div className="h-screen overflow-hidden">
        <Swiper
          onSlideChange={handleSlideChange}
          pagination={{ dynamicBullets: true }}
          modules={[Parallax]}
          spaceBetween={0}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          parallax={true}
          className="h-screen z-100 w-screen m-auto"
          breakpoints={{
            320: {
                slidesPerView: 1,
                direction: 'vertical'
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 50,
                direction: 'horizontal',
            }
        }}
        >
          {lists.map((item, index) => (
            <SwiperSlide key={index} className="w-full flex relative">
              <div className="m-auto w-[80%] md:w-[60%] relative">
                <Image
                  className="w-full m-auto pt-5 rounded-sm"
                  src={item.img}
                  alt="slide"
                  width={400}
                  height={600}
                  data-swiper-parallax="0"
                />
                <div className="-rotate-12 absolute top-0 -left-[1rem] mix-blend-difference">
                  <p className="text-center font-medium text-5xl text-white rounded-sm" data-swiper-parallax={size.width < size.height ? '-500' : '-200'}>
                      {item.title}
                  </p>
                </div>
                <div className="-rotate-6 absolute bottom-0 -right-[1rem] mix-blend-difference">
                  <p className="text-center font-medium text-5xl text-white" data-swiper-parallax={size.width < size.height ? '-500' : '-200'}>
                      {item.year}
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
