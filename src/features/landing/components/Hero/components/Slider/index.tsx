"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { news } from '@/constants/global';
import Link from 'next/link';


export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                /*   navigation={true} */
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper border-r-[5px] shadow-2xl rounded-b-xl"
            >
                <SwiperSlide >
                    <div className='relative h-full w-full'>
                        <Image width={600} height={600} alt='' className='rounded-t-xl' src={news[0].imgUrl} />
                        <div className='flex items-center absolute bottom-6 w-full justify-between px-10 right-0 text-black '>
                            <span className='font-bold text-right'>{news[0].title}</span>
                            <Link href="/news">
                                <button className='bg-primary p-1 px-4 rounded-lg text-white'>آرشیو</button>
                            </Link>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full'>
                        <Image width={600} height={600} alt='' className='rounded-t-xl' src={news[1].imgUrl} />
                        <div className='flex items-center absolute bottom-6 w-full justify-between px-10 right-0 text-black '>
                            <span className='font-bold text-right'>{news[1].title}</span>
                            <Link href="/news">
                                <button className='bg-primary p-1 px-4 rounded-lg text-white'>آرشیو</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full'>
                        <Image width={600} height={600} alt='' className='rounded-t-xl' src={news[2].imgUrl} />
                        <div className='flex items-center absolute bottom-6 w-full justify-between px-10 right-0 text-black '>
                            <span className='font-bold text-right'>{news[2].title}</span>
                            <Link href="/news">
                                <button className='bg-primary p-1 px-4 rounded-lg text-white'>آرشیو</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}