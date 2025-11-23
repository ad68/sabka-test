import Image from "next/image";
import ElectronicService from '@/assets/img/landing/ElectronicServices.png'
import { LeafIcon } from "@/assets/icons/LeafIcon";
import React from "react";
import { CertificateIcon } from "@/assets/icons/CertificateIcon";
import { CalendarIcon } from "@/assets/icons/CalendarIcon";
import { InsuranceLetterIcon } from "@/assets/icons/InsuranceLetterIcon";
import { RulesIcon } from "@/assets/icons/RulesIcon";
import { InquiryIcon } from "@/assets/icons/InquiryIcon";
import { ServiceDeskIcon } from "@/assets/icons/ServiceDeskIcon";
import { ComplainIcon } from "@/assets/icons/ComplainIcon";
import { PortalIcon } from "@/assets/icons/PortalIcon";
import Link from "next/link";
import { ArrowRTLIcon } from "@/assets/icons/ArrowRTL";
import TwoLeavesBg from '@/assets/img/landing/TwoLeavesBg.png';
const items = [
    { title: 'درگاه ملی مجوزها', icon: <CertificateIcon className="text-[#e9aa1e]" />, link: 'https://mojavez.ir/' },
    { title: 'صدور بیمه نامه', icon: <InsuranceLetterIcon className="text-[#e9aa1e]" />, link: 'https://cs.sabka.ir/Login.aspx' },
    { title: 'فصل نامه بیمه کشاورزی', icon: <CalendarIcon className="text-[#e9aa1e]" />, link: 'http://journal.sbkiran.ir/page/44/%D8%A2%D8%B1%D8%B4%DB%8C%D9%88-%D9%85%D8%AC%D9%84%D9%87-%D9%88-%D9%85%D9%82%D8%A7%D9%84%D8%A7%D8%AA' },
    { title: 'آیین نامه ها و دستورالعمل ها', icon: <RulesIcon className="text-[#e9aa1e]" />, link: '' },
    { title: 'استعلام بیمه نامه', icon: <InquiryIcon className="text-[#e9aa1e]" />, link: 'https://cs.sabka.ir/_Public/Services/PolicyInquery.aspx' },
    { title: 'میز ارتباط مردمی', icon: <ServiceDeskIcon className="text-[#e9aa1e]" />, link: '' },
    { title: 'رسیدگی و شکایات', icon: <ComplainIcon className="text-[#e9aa1e]" />, link: '' },
    { title: 'پورتال من', icon: <PortalIcon className="text-[#e9aa1e]" />, link: 'https://cs.sabka.ir/Login.aspx' },
]
export default function Index() {
    return (
        <section className="w-full relative mt-[150px] xl:mt-[180px]">
            <Image src={TwoLeavesBg} className="hidden xl:block absolute right-0 w-[200px] xl:w-[300px] xl:top-[-300px]" alt="" />
            <div
                className='max-w-6xl m-auto flex flex-row  gap-5 xl:gap-[36px] justify-center items-center px-[20px] xl:px-0'
            >
                <div className="hidden w-[393px] md:visible md:flex relative">
                    <Image
                        className="w-full h-[400px] md:h-[450px] xl:h-[488px] "
                        src={ElectronicService.src}
                        alt='sabka'
                        width={400}
                        height={400}
                    />
                    <div className="absolute w-full bottom-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10 p-2">
                        ثبت و پیگیری امور اداری، سریع و الکترونیکی
                    </div>
                </div>
                <div className='flex  flex-col justify-between  w-[707px] h-auto xl:h-[488px]  gap-6 min-h-[400px]' >
                    <div className=' flex flex-col justify-start items-start  gap-3 '>
                        <span className='flex flex-row gap-2 text-sm'>
                            کشاورزی، ستون خودکفایی ملی
                            <LeafIcon />
                        </span>
                        <p className='text-right text-xl md:text-2xl font-bold'>خدمات الکترونیکی صندوق بیمه کشاورزی</p>
                        <div className='text-right md:text-center text-sm max-w-2xl xl:max-w-4xl'>دسترسی سریع و آسان به سامانه‌ها، مجوزها و اطلاعات بیمه‌ای برای بهره‌برداران، کارشناسان و عموم کاربران</div>
                    </div>
                    <div className='xl:max-w-2xl 2xl:max-w-4xl mx-auto flex flex-row justify-center items-center md:justify-start md:items-start xl:justify-center xl:items-center flex-wrap gap-3 lg:gap-6'>
                        {items.map((item, index) => {
                            return (
                                <Link href={item.link} className='cursor-pointer group flex flex-row justify-between h-[70px] items-center min-w-full xl:min-w-[340px] hover:shadow-lg transition-all duration-500  border-[1px]  border-[#A7D9AC] p-2 rounded-xl' key={index}>
                                    <div className='flex flex-row gap-1 justify-start items-center'>
                                        <span className='font-bold text-sm'>{item.icon}</span>
                                        <span className='font-bold text-sm'>{item.title}</span>
                                    </div>
                                    <div className='hidden md:flex w-[38px] h-[38px] p-2  justify-center items-center rounded-md bg-[#35663A] text-white group-hover:bg-[#E9AA1E] transition-all duration-500 cursor-pointer'>
                                        <ArrowRTLIcon className="w-[10px]" />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>

                </div>

            </div>
        </section >

    )
}