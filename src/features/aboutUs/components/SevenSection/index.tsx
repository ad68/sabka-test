import Image from "next/image";
import bg from '@/assets/img/about/about-bg.png'
const items = [
    'در انجام فعالیت های سازمانی نظم و انضباط و آراستگی شخصی را رعایت نموده و در محل کار خود حضور به موقع داشته باشیم. ',
    'در انجام وظایف و مسئولیتها پشتکار و جدیت داشته و آنها را با دقت صحت و به موقع انجام دهیم',
    'روحیه کار جمعی را در خود تقویت کرده دانش خود را در زمینه فعالیتهای سازمانی به روز نگه داشته و آن را با توانمندی و ابتکار خود در انجام فعالیتهای اداری و سازمانی بکار بگیریم و سعی کنیم که این امر را در بین همکاران نیز اشاعه دهیم.',
    ' برای ایده ها و افکار جدید ارزش قائل شده و در جهت جاری سازی آنها به شکل منطقی در دستگاه اجرایی متبوع و نظام اداری تلاش نماییم',
    'روحیه قدردانی از دیگران را در خود تقویت کرده و در جهت ارتقای بهره وری نظام اداری از طریق افزایش اثر بخشی و کارایی در حیطه فعالیت خود تلاش نماییم و سعی کنیم که این امر را در بین همکاران نیز اشاعه دهیم.',
    'از امکانات تجهیزات و سرمایه های نظام اداری حفاظت نموده و در استفاده مؤثر و مطلوب از آنها کوشا باشیم',
    'دانش تجربه و توانمندی های خود را با سعه صدر در اختیار همکاران قرار داده و در ارتقاء توانمندی های آنان کوشا باشیم',
    'روحیه انتقاد پذیری داشته و انتقادات سازنده دیگران را به عنوان فرصتی برای اصلاح و بهبود خود و فعالیت هایمان قلمداد کنیم',
    'همیشه و در همه حال رضایت خدای متعال را مدنظر قرار داده و بر آنچه که خداوند امر یا از آن نهی می.کند. توجه کامل داشته و او را ناظر بر اعمال و کردار خویش بدانیم',
]

export default function Index() {
    return (
        <section className="w-full max-w-6xl m-auto flex flex-col justify-center items-center lg:flex-row xl:justify-between xl:items-center mb-[63px]">
            <section style={{ backgroundImage: `url(${bg.src})` }} className="max-w-[800px] order-2 xl:order-1 bg-no-repeat px-[20px]  xl:px-[75px] py-[47px] bg-[#F5F5F5]  h-full text-justify">
                <h2 className="text-[#284D2C] text-2xl xl:max-w-md font-medium xl:font-bold xl:text-2xl 2xl:max-w-xl">
                    مفاد منشور اخلاقی کارکنان صندوق بیمه کشاورزی
                </h2>
                <section className=" mt-[25px] text-[13px] xl:text-[14px] leading-loose font-medium">
                    {items.map((item, index) => (
                        <p key={index}>
                            {index + 1}. {item}
                        </p>
                    ))}
                </section>
            </section>
            <section className="w-auto xl:w-[550px] flex justify-center items-center xl:mr-[-50px] px-5 xl:px-0 relative order-1 xl:order-2">
                <Image src='/assets/img/about/SevenSection.jpg' className="rounded-xl" alt='' width={700} height={700} />
            </section>
        </section>
    );
}
