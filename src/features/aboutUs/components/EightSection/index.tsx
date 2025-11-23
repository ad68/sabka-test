import Image from "next/image";
const items = [
    'مردم و شهروندان به عنوان ذی حقان برای نظام اداری تلقی میشوند تلاش میکنیم با ایجاد ارتباط مناسب و ارائه خدمت بهتر تصویری مثبت از دستگاه اجرایی و نظام اداری در ذهن آنان ایجاد نماییم',
    'به مراجعه کنندگان به صورت عادلانه و در چارچوب قوانین مقررات و ضوابط خدمت ارائه دهیم.',
    'خواسته های قانونی ارباب رجوع را در چارچوب وظایف خود با صحت دقت و سرعت و بدون تشریفات زائد اداری و تحمیل هزینه اضافی به وی ارائه دهیم.',
    ' به ارباب رجوع احترام گذاشته و در استقبال و صحبت با آنان گشاده رو باشیم',
    'به نظرات پیشنهادات و بازخوردهای شهروندان و مراجعه کنندگان به عنوان منبعی گرانبها برای بهبود عملکرد نگاه کرده و با دید منطقی به آنها توجه نماییم.',
    'سعی کنیم فرهنگ تکریم ارباب رجوع پاسخگویی و گره گشایی از مشکلات آنها و مردم به یک ارزش حاکم در نظام اداری تبدیل شود.',
]
export default function Index() {
    return (
        <section className='max-w-6xl xl:h-[627px] pb-[50px] m-auto relative flex flex-col md:flex-row items-center'>
            {/*  <Image src={Wheat.src} alt='' width={257} height={200} className='object-contain absolute right-0 xl:left-0 bottom-0 z-0' /> */}
            <section className="h-full w-full flex items-center xl:w-[402px] xl:ml-[-50px] px-5 xl:px-0 relative ">
                <Image src='/assets/img/about/EightSection.jpg' className="rounded-xl" alt='' width={700} height={700} />
            </section>
            <section className='xl:w-[800px] h-full px-[20px] xl:px-[85px] py-[47px] bg-[#F5F5F5]'>
                <h2 className='text-[#284D2C] text-2xl max-w-md 2xl:max-w-full font-bold'>نحوه رفتار و برخورد با ارباب رجوع و همکاران</h2>
                <section className='mt-[25px] text-[13px] xl:text-[16px] leading-relaxed'>
                    {items.map((item, index) => {
                        return (
                            <p key={index} className="text-justify">
                                {index + 1}.{item}
                            </p>
                        )
                    })}
                </section>
            </section>

        </section>
    )
}