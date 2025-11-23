
import Leaves from "@/assets/img/landing/Leaves.png";
/* import NewsItems from "./components/NewsItems"; */
import Image from "next/image";
export default function Index() {
    return (
        <section
            className='relative w-full z-[-10px]'
        >
            <div className="w-full flex justify-center overflow-hidden">
                <Image width={1920} height={700} className="w-full hidden xl:block h-auto" src="/assets/img/landing/hero-bg.png" alt="" />
                <Image width={1920} height={700} className="w-full block xl:hidden h-auto" src="/assets/img/landing/hero-bg-mobile.png" alt="" />
            </div>
            <section className='absolute top-[140px] xl:top-20 left-0 w-full xl:mt-[24px] 2xl:mt-[100px] flex flex-col justify-center items-center xl:px-[200px] md:px-28  text-center max-w-[900px] xl:max-w-full mx-auto'>
                <div className="w-full xl:w-[1136px] max-w-full relative flex flex-col justify-center items-center">
                    <div className=' xl:p-2 2xl:p-4 relative flex flex-row gap-2 md:gap-6 justify-center items-center'>
                        <Image src={Leaves.src} alt='sabka' width={60} height={60} className="w-[30px] xl:w-auto" />
                        <p className='font-bold text-white text-[20px] xl:text-[36px] 2xl:text-[48px] leading-snug'>
                            سرمایه‌ات را در دل خاک امن کن
                        </p>
                        <Image src={Leaves.src} alt='sabka' width={60} height={60} className="w-[30px] xl:w-auto" />
                    </div>
                    <p className='font-light xl:font-bold text-white text-sm xl:text-[20px] 2xl:text-[36px] lg:text-[32px] mt-[5px] leading-relaxed'>
                        با بیمه کشاورزی، خیال آسوده برای امروز و فردای مزرعه‌ات
                    </p>
                    <div className="absolute bottom-[-30px] right-[20px] xl:right-0 flex flex-col gap-2">
                        <div className="border-t-4 border-l-4 border-dotted border-white w-[40px] xl:w-[60px] h-[2px]" />
                        <div className="border-t-4 border-l-4 border-dotted border-white w-[40px] xl:w-[60px] h-[2px]" />
                    </div>
                    <div className="absolute top-[-35px] xl:top-0 left-[20px] xl:left-0 flex flex-col gap-2">
                        <div className="border-b-4 border-r-4 border-dotted border-white w-[40px] xl:w-[60px] h-[2px]" />
                        <div className="border-b-4 border-r-4 border-dotted border-white w-[40px] xl:w-[60px] h-[2px]" />
                    </div>
                </div>
                {/*   <div className="mt-[100px]">
                    <NewsItems />
                </div> */}
            </section>
        </section>
    );
}
