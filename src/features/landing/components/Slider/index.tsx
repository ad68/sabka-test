
import Slider from './component/Slider'
import Link from 'next/link'
export default function Index() {
    return <section className="max-w-6xl w-full flex justify-between relative m-auto xl:h-[400px] bg-gradient-to-r mt-[119px] rounded-[20px]">
        <section
            className="bg-cover bg-no-repeat  w-full  md:h-[380px] xl:h-[421px] flex flex-col xl:flex-row justify-center  xl:pt-0 items-center md:items-start md:pr-10 gap-3 md:rounded-2xl"
            style={{ backgroundImage: `url(/assets/img/landing/MostViewImg1.png)` }}
        >
            <section className="flex flex-col h-full justify-center items-center md:items-start gap-3 md:gap-3 max-w-lg mt-10 md:mt-0">
                <p className="font-bold text-md md:text-2xl xl:max-w-3xl text-white max-w-[320px]">
                    پربازدیدترین تصاویر و ویدئوها
                </p>
                <p className="text-white text-md md:text-md ">تصاویر نشست‌ها و جلسات نمایندگان</p>
                <Link href={"/"} className="flex items-center justify-center">
                    <button className="group-hover:bg-white py-2 px-3 w-fit flex flex-row justify-center items-center gap-2 text-xs border-2 border-neutral-200 text-white rounded-lg transition-all duration-300 z-10">
                        مشاهده همه
                    </button>
                </Link>
            </section>
            <div className='w-full xl:w-[800px] '>
                <Slider />
            </div>
        </section>
    </section>
}
