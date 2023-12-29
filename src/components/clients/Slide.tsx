'use client'
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

export default function WorkSlide({
    items
}: {
    items: any }
) {
    return (
        <div className="h-screen overflow-hidden bg-gradient-to-tr from-slate-800 to-slate-950">
            <Swiper
                pagination={{ dynamicBullets: true }}
                spaceBetween={0}
                centeredSlides={true}
                direction='horizontal'
                slidesPerView={1}
                loop={true}
                parallax={true}
                className="h-screen z-100 w-screen m-auto"
            >
                {items.map((item: any, index: number) => (
                    <SwiperSlide key={item.id} className="w-full flex">
                        <div className="w-[100%] relative h-screen md:flex">
                            <Image
                                className="w-[90vw] md:w-[40vw] my-4 mx-auto md:m-auto rounded-lg"
                                src={item.pinnedImage}
                                alt="slide"
                                width={1000}
                                height={1000}
                            />
                            <div className="m-auto w-[90%] md:w-[40vw] flex flex-col">
                                <p className="text-center font-medium text-5xl text-white rounded-sm">
                                {item.title} {item.year}
                                </p>
                                <div id="photobox" className="w-[100%] my-3 md:my-6 grid grid-cols-3 md:grid-cols-3 gap-4">
                                </div>
                                <p className="text-center font-medium text-3xl text-white rounded-sm">
                                    Voir plus
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}