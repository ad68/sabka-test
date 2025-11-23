import Rahbar from '@/assets/img/landing/Rahbar.png';
import { LeafIcon } from "@/assets/icons/LeafIcon";
import Image from "next/image";
import rightBg from '@/assets/img/landing/third-right-bg.png'
import leftBg from '@/assets/img/landing/third-left-bg.png'
export default function Index() {
    return (
        <section
            className='w-full relative flex flex-col gap-2 justify-center items-center mt-[80px]'>
            <Image width={400} height={400} alt='' className=' w-[100px] xl:w-auto h-auto absolute right-0 top-[-80px]' src={rightBg} />
            <Image width={400} height={400} alt='' className='w-[100px] xl:w-auto h-auto absolute left-0 top-[-80px]' src={leftBg} />
            <header className='w-full flex flex-col justify-center items-center md:justify-center md:items-center gap-3'>
                <span className='flex flex-row gap-1'>
                    کشاورزی، ستون خودکفایی ملی
                    <LeafIcon />
                </span>
                <p className='text-2xl md:text-3xl font-bold'>رهنمودهای رهبر انقلاب</p>
                <p className='text-center text-sm xl:text-base max-w-sm md:max-w-2xl px-[25px] lg:px-0'>سخنان مقام معظم رهبری در حوزه کشاورزی، مسیر روشن استقلال غذایی کشور را ترسیم می‌کند؛ نگاهی راهبردی برای حفظ امنیت، تولید، و کرامت کشاورزان.</p>
            </header>
            <div className="flex items-center justify-start  ">
                <div className="flex flex-col md:flex-row max-w-full px-[20px] justify-start md:justify-center md:max-w-6xl items-start md:items-center w-full bg-white rounded-xl p-6">
                    <div className="relative flex-1">
                        <Image
                            src={Rahbar}
                            alt="Background Image"
                            className='w-[286px] h-auto xl:w-[635px] xl:h-[459px]'
                            quality={100}
                            width={700}
                            height={700}
                        />
                    </div>
                    <div className='relative'>
                        <div className="w-[293px] h-[156px] xl:w-[551px] xl:h-[331px] p-6 relative  bg-white z-10  border-0  border-r-[#35663A] border-r-8 mt-[-60px] md:mt-0 mr-[20px] md:max-w-[551px] md:mr-[-60px] rounded-xl  max-h-[320px] shadow-2xl">
                            <div className='bg-[#35663A] w-[46px] xl:w-[75px] h-[20px] xl:h-[34px] rounded-[4px] absolute left-0 top-[50px] xl:top-0'></div>
                            <div className="text-[14px] md:text-lg pl:[150px] max-w-xs font-semibold text-gray-800 mb-2">
                                اهمیت کشاورزی دانش بنیان و امنیت غذایی
                                در کلام مقام معظم رهبری
                            </div>
                            <p className="text-gray-600 text-[16px] md:text-md font-semibold hidden xl:block">
                                اولاً هفته‌ای کشاورزی بر همه‌ی شما کشاورزان عزیز. بلکه بر
                                همه‌ی ملت ایران مبارک باشد. دیدار با زحمتکشان عرصه‌ی کشاورزی
                                - با توجه به اهمیت که این بخش برای امروز و فردای این کشور
                                دارد - برای من دیدار پُر‌هَلا‌سیتی است. مطالب خوبی هم بیان شد،
                                هم آنچه که این بخش باید دارد، ما کشاورزان نمونه، گفتند.
                                مطالب شیرین و دلنشینی بود برای من، و انعکاس مجموعه‌ی زیبایی
                                بود از اعتماد به نفس، امید به آینده، تلاش بی‌وقفه و شجاعانه.
                                در این توکل به خداوند متعال، هم مطالبی که...
                            </p>
                            <p className="text-gray-600 text-[12px] md:text-md font-semibold block xl:hidden">
                                اولاً هفته‌ای کشاورزی بر همه‌ی شما کشاورزان عزیز. بلکه بر
                                همه‌ی ملت ایران مبارک باشد. دیدار با زحمتکشان عرصه‌ی کشاورزی
                                - با توجه به اهمیت که این بخش برای امروز و فردای ....
                            </p>
                        </div>
                        <div className='bg-[#35663A] w-[61px] h-[96px] xl:w-[20px] xl:h-[187px]  rounded-md absolute top-[80%] z-[0] xl:top-1/2 -translate-x-2 -left-2  transform  -translate-y-1/2'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}