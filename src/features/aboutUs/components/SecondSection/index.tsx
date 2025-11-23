'use client'
import Image from "next/image";
import rightBg from "@/assets/img/landing/third-right-bg.png";
import leftBg from "@/assets/img/landing/third-left-bg.png";
/* import useAboutUs from "../../hooks/useAboutUs"; */


export default function Index({ ref }: any) {

    return (
        <section ref={ref} className='w-full relative flex flex-col md:flex-row gap-2 justify-center items-center p-6 py-[60px]  '>
            <div className="order-2 xl:order-1">
                <Image width={400} height={350} alt='' className='w-[100px] xl:w-auto h-auto absolute right-0 top-[-80px]' src={rightBg} />
                <Image width={400} height={400} alt='' className='w-[100px] xl:w-auto h-auto absolute left-0 top-[-80px]' src={leftBg} />
                <Image src='/assets/img/about/SecondSection.png' alt='' width={500} height={400} className='object-cover' />
            </div>

            <section className="order-1 xl:order-2">
                <h3 className='max-w-sm 2xl:max-w-xl text-[24px] font-medium xl:text-4xl text-center xl:text-right xl:font-bold text-[#284D2C]'>پیشینه بيمه کشاورزی ایران</h3>
                <p className='max-w-lg 2xl:max-w-xl text-black mt-[8px] text-justify 2xl:mt-[16px]'>به منظور حمایت از کشاورزان و دامدارانی که محصولاتشان بر اثر حوادث قهری و طبیعی دچار خسارت می شد و برای کمک به ادامه فعالیت تولیدی آنان، شورای انقلاب اسلامی در تاریخ هشتم بهمن ماه سال 1358، مصوب نمود صندوق ویژه ای به نام صندوق کمک به خسارت دیدگان محصولات کشاورزی و دامی در بانک کشاورزی تشکیل شود. بر اساس تبصره پنج مصوبه شورای انقلاب، وزارت کشاورزی مکلف شد ظرف مدت پنج سال از تصویب این قانون، مطالعات و اقدامات لازم را در مورد اجرای مقررات بیمه محصولات کشاورزی انجام داده و لایحه آن را تهیه نماید.
                    همزمان با آغاز این فعالیت کمیته ای مرکب از نمایندگان وزارت کشاورزی، وزارت برنامه و بودجه، وزارت امور اقتصاد و دارایی، وزارت بازرگانی، بیمه مرکزی ایران و بانک کشاورزی مأمور انجام مطالعات و تدوین لایحه قانونی و تهیه اساسنامه صندوق بیمه محصولات کشاورزی شدند.</p>
            </section>

        </section>
    )
}