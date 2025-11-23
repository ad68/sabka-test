"use client"
import { LeafIcon } from "@/assets/icons/LeafIcon";
import Image from "next/image";
import Link from "next/link";
import { LeftArrowIcon } from "@/assets/icons/LeftArrowIcon";

type NewsType = { title: string, desc: string, img: string, date: string, isSelected: boolean, link: string };
const news: NewsType[] = [
    {
        title: 'شتاب در تحول و توسعه بیمه کشاورزی همراه با تکیه بر خلق منابع جدید',
        desc: 'صنــدوق بیمه کشــاورزی با بهرهگیری از یک هــزار و ۲۹۰ ارزیاب فعال، دو شــرکت ملی ارزیابــی و حمایــت نهادهایی چون وزارت کشــور،',
        img: '/assets/img/landing/RecentNewPic1.png',
        date: '۱۹ مرداد ۱۴۰۳',
        link: '',
        isSelected: true,
    },
    {
        title: 'پیام قائم مقام صندوق بیمه کشاورزی به مناسبت چهل و یکمین سالگرد تأسیس صندوق بیمه کشاورزی',
        desc: '',
        img: '/assets/img/landing/RecentNewPic2.png',
        date: '۱۹ مرداد ۱۴۰۳',
        link: '',
        isSelected: false,
    },
    {
        title: 'پیام قائم مقام صندوق بیمه کشاورزی به مناسبت چهل و یکمین سالگرد تأسیس صندوق بیمه کشاورزی',
        desc: '',
        img: '/assets/img/landing/RecentNewPic3.png',
        date: '۱۹ مرداد ۱۴۰۳',
        link: '',
        isSelected: false,
    },
    {
        title: 'پیام قائم مقام صندوق بیمه کشاورزی به مناسبت چهل و یکمین سالگرد تأسیس صندوق بیمه کشاورزی',
        desc: '',
        img: '/assets/img/landing/RecentNewPic4.png',
        date: '۱۹ مرداد ۱۴۰۳',
        link: '',
        isSelected: false,
    },
]

export default function Index() {
    const selectedNews = news.find(news => news.isSelected) || news[0]
    const filteredNews = news.filter(newsItem => newsItem.title !== selectedNews.title);
    return (
        <section
            className='w-full bg-contain flex flex-row flex-wrap max-w-7xl xl:max-w-full mx-auto gap-4 justify-center items-center min-h-screen p-10 '
        >

            <section
                className='w-full mt-8 flex flex-col justify-center items-center md:justify-center md:items-center gap-3'>
                <span className='flex flex-row gap-2'>
                    با ما از تازه‌ترین تحولات باخبر شوید
                    <LeafIcon />
                </span>

                <p className='text-xl md:text-3xl font-bold'>جدیدترین نشریات خبری</p>
                <section className='text-center font-semibold text-sm md:text-md max-w-2xl'>در این بخش می‌توانید به جدیدترین نشریات، اخبار و تحلیل‌های
                    تخصصی دسترسی داشته باشید.
                </section>
            </section>

            <section className='w-full flex flex-row justify-center items-center  gap-2 xl:gap-10 flex-wrap'>
                <section className='max-w-md xl:max-w-2xl'>
                    <Image src={selectedNews.img} alt='sabka' width={491} height={427} />
                    <section>
                        <section>
                            <p className='my-3 font-bold text-md md:text-lg'>{selectedNews.title}</p>
                            <p className='mb-2 text-md font-semibold md:text-lg max-w-[491px]'>{selectedNews.desc}</p>
                        </section>
                        <section className='flex flex-row justify-between items-center gap-2  px-2'>
                            <span>{selectedNews.date}</span>
                            <section>
                                <Link href={selectedNews.link} className='text-sm font-bold flex flex-row gap-2 items-center justify-center'>
                                    مطالعه
                                    <LeftArrowIcon />
                                </Link>
                            </section>
                        </section>

                    </section>
                </section>
                <section className='flex flex-col gap-3 xl:gap-4 '>
                    {filteredNews.map((newsItem, index) => {
                        return (
                            <section key={index} className='flex flex-row justify-start max-w-2xl mx-auto'>
                                <Image src={newsItem.img} alt={newsItem.title} width={214} height={174} className='rounded-2xl' />
                                <section className='flex  flex-col gap-2 text-[#35663A] items-start justify-between px-2 py-6'>
                                    <section>
                                        <p className='text-md font-bold'>{newsItem.title}</p>
                                        <p className='text-sm'>{newsItem.date}</p>
                                    </section>
                                    <section>
                                        <Link href={newsItem.link} className='text-sm font-bold flex flex-row gap-2 items-center justify-center'>
                                            مطالعه
                                            <LeftArrowIcon />
                                        </Link>
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