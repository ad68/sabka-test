"use client"
import Link from "next/link";
import { ArrowRTLIcon } from "@/assets/icons/ArrowRTL";
import Image from "next/image";
import { useIsMobile } from "@/features/products/hooks/useIsMobile";
import { Calendar1Icon } from "lucide-react";
import { gregorianToJalali } from "@/utils";
import { NewsCardProp } from "@/features/landing/types";

export default function Index({ title, id, imgUrl, date }: NewsCardProp) {
    const isMobile = useIsMobile();
    return (
        <>
            {isMobile ? (
                <Link href={`/photos/${id}/${title}`}>
                    <section className='group flex flex-col items-center justify-center w-full h-[200px]  rounded-2xl bg-white hover:bg-[#7BB28033] group  transition-all duration-500 cursor-pointer'>
                        <section className='flex flex-row justify-between items-center p-1'>
                            <p className='font-bold text-xs block w-full'>{title}</p>
                        </section>
                        <section className='relative w-[151px] mx-auto h-[100px] bg-cover' style={{ backgroundImage: imgUrl }}>
                            <Image unoptimized src={imgUrl} alt={title} className="mt-[16px]" fill />
                            <div className='absolute left-[-2px] top-0 border-white border-2 w-[30px] rounded-br-lg h-[30px] p-2 flex justify-center items-center rounded-md bg-[#35663A] text-white group-hover:bg-[#E9AA1E]  transition-all duration-500 cursor-pointer'>
                                <ArrowRTLIcon />
                            </div>
                        </section>
                    </section>
                </Link >
            ) : (
                <Link href={`/photos/${id}/${title}`}>
                    <section className='group flex flex-col items-center relative justify-center p-2 w-[300px] h-[300px] xl:w-[365px] xl:h-[365px] rounded-2xl bg-white hover:bg-[#7BB28033] group  transition-all duration-500 cursor-pointer'>
                        <section className='w-full p-4'>
                            <div className="absolute top-2 text-sm left-6 flex items-center gap-1">
                                <Calendar1Icon className="w-[16px] text-secondary" />
                                <span className="ltr">تاریخ : {gregorianToJalali(date)}</span>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <p className='w-[85%] font-bold text-sm'>{title}</p>
                                <div className='w-[38px] h-[38px] p-2 flex justify-center items-center rounded-md bg-[#35663A] text-white group-hover:bg-[#E9AA1E]  transition-all duration-500 cursor-pointer'>
                                    <ArrowRTLIcon className="w-[10px]" />
                                </div>
                            </div>
                        </section>
                        <section className='relative w-[90%] mx-auto h-[240px] bg-cover' style={{ backgroundImage: imgUrl }}>
                            <Image unoptimized src={imgUrl} alt={title} fill />
                        </section>
                    </section>
                </Link>
            )
            }
        </>
    )
}