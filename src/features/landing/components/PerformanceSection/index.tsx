import { LeafIcon } from "@/assets/icons/LeafIcon";
import React from "react";
import { TecIcon } from "@/assets/icons/TecIcon";
import { UserIcon } from "@/assets/icons/UserIcon";
import { InsuranceIcon } from "@/assets/icons/InsuranceIcon";
import PerformanceImg from "@/assets/img/landing/PerformanceImg.png";
import PerformanceImgBg from "@/assets/img/landing/PerformanceImgBg.png";
import Image from "next/image";
import LeafLeftBg from '@/assets/img/landing/LeafLeftBg.png';
const performanceItems = [
    {
        title: 'حوره برنامه ریزی و فناوری', icon: <TecIcon />,
        children: ['تشکیل شورای راهبری'
            , 'پیگیری تدوین سند راهبردی',
            'برنامه ریزی برای ارتقا بیمه کشاورزی',
            'سامانه ارزیابی خسارت بر خط']
    },
    {
        title: 'حوزه توسعه منابع انسانی', icon: <UserIcon />, children: [
            'بازنگری ساختار کمیته‌ها  کارگروه‌ها',
            'اصلاح ساختار سازمانی با هدف توسعه ',
            'تدوین مبانی و برنامه راهبردی آموزش ',
            'توسعه و پیاده سازی سامانه هوشمند ارزیابی'
        ]
    },
    {
        title: 'حوزه امور بیمه', icon: <InsuranceIcon />,
        children: [
            'دستور امهال اقساط بیمه ',
            'پرداخت کامل غرامت‌های تایید شده ',
            'بازنگری دستورالعمل‌های بیمه کشاورزی ',
            'بررسی جامع عملکرد عوامل اجرایی'
        ]
    },
]

export default function Index() {
    return (
        <section
            className='w-full relative flex flex-row-reverse flex-wrap gap-10 justify-center mt-[80px] items-center'
        >
            <Image src={LeafLeftBg} className="absolute left-0 w-[200px] xl:w-[300px] top-[-200px] xl:top-[-300px]" alt="" />
            <section
                className="relative max-w-2xl h-auto" >
                <section className="absolute inset-0 z-0 top-4 le-ft-2 overflow-hidden rounded-3xl">
                    <Image src={PerformanceImgBg.src} alt='' fill />
                </section>
                <Image className='w-[80%] relative  z-10 top-1/5 left-1/3 -translate-x-1/2 transform -translate-y-1/5' src={PerformanceImg.src} alt='sabka.ir' width={300} height={300} />

                <section className='mt-4 p-4 relative z-50'>
                    <p className='font-bold px-2 border-r-2 border-r-[#35663A]'>دکتر بهزاد باباخانی</p>
                    <section className='max-w-sm mt-2 font-semibold'>
                        در تاریخ ۷ خردادماه ۱۴۰۴ با صدور حکمی از سوی وزیر جهاد کشاورزی به عنوان قائم مقام مدیرعامل و عضو هیئت مدیره صندوق کشاورزی منصوب شد.
                    </section>
                </section>
            </section>
            <section className=' max-w-full px-[20px] xl:px-0 mt-8 flex flex-col justify-center items-center md:justify-start md:items-start gap-3'>
                <section className=''>
                    <span className='flex flex-row gap-2 justify-start text-sm mb-2'>
                        عملکرد 2 ماهه گذشته
                        <LeafIcon />
                    </span>
                    <p className='text-lg md:text-2xl font-bold max-w-lg'>مهمترین اقدامات قائم مقام صندوق بیمه کشاورزی در 60 روز نخست خدمت</p>
                </section>
                <section className='flex flex-col justify-start items-start '>
                    {performanceItems.map(performanceItem => {
                        return (
                            <section className='w-full flex justify-start items-start gap-4 ' key={performanceItem.title}>
                                <section className='w-8 h-8 rounded-md rotate-45 bg-[#E9AA1E] flex justify-center items-center'>
                                    <section className='font-bold text-xl rotate-[-45deg]'>{performanceItem.icon}</section>
                                </section>
                                <section className='w-full gap-2 flex flex-col  flex-wrap justify-start items-start'>
                                    <section className='font-bold'>{performanceItem.title}</section>
                                    <section className='flex max-w-xl flex-row mb-4 flex-wrap justify-between items-center'>
                                        {performanceItem.children.map(child => {
                                            return (
                                                <p className='inline-block min-w-72  text-[14px] xl:text-[16px]' key={child}>
                                                    {child}
                                                </p>
                                            )
                                        })}
                                    </section>

                                </section>
                            </section>
                        )
                    })}

                </section>

            </section>

        </section>
    )
}