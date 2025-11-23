import CardItem from "./components/Item";
import { CropsIcon } from "@/assets/icons/CropsIcon";
import { LiveStockIcon } from "@/assets/icons/LiveStockIcon";
import { TreeIcon } from "@/assets/icons/TreeIcon";
import { WalletIcon } from "@/assets/icons/WalletIcon";
import { TreesIcon } from "@/assets/icons/TreesIcon";

const items = [
    { title: 'اصل برابری', icon: <CropsIcon /> },
    { title: 'اصل احترام و اعتماد', icon: <LiveStockIcon /> },
    { title: 'اصل پاسخگویی', icon: <TreeIcon /> },
    { title: 'اصل تعهد و وفاداری به صندق', icon: <WalletIcon /> },
    { title: 'اصل شهروندمداری', icon: <TreesIcon /> },
    { title: 'اصل شفافیت', icon: <CropsIcon /> },
    { title: 'اصل عدم سواستفاده از موقعیت شغلی', icon: <CropsIcon /> },
    { title: 'اصل به کار گیری مهارت و تخصص', icon: <CropsIcon /> },
]

const items2 = [
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
const items3 = [
    'مردم و شهروندان به عنوان ذی حقان برای نظام اداری تلقی میشوند تلاش میکنیم با ایجاد ارتباط مناسب و ارائه خدمت بهتر تصویری مثبت از دستگاه اجرایی و نظام اداری در ذهن آنان ایجاد نماییم',
    'به مراجعه کنندگان به صورت عادلانه و در چارچوب قوانین مقررات و ضوابط خدمت ارائه دهیم.',
    'خواسته های قانونی ارباب رجوع را در چارچوب وظایف خود با صحت دقت و سرعت و بدون تشریفات زائد اداری و تحمیل هزینه اضافی به وی ارائه دهیم.',
    ' به ارباب رجوع احترام گذاشته و در استقبال و صحبت با آنان گشاده رو باشیم',
    'به نظرات پیشنهادات و بازخوردهای شهروندان و مراجعه کنندگان به عنوان منبعی گرانبها برای بهبود عملکرد نگاه کرده و با دید منطقی به آنها توجه نماییم.',
    'سعی کنیم فرهنگ تکریم ارباب رجوع پاسخگویی و گره گشایی از مشکلات آنها و مردم به یک ارزش حاکم در نظام اداری تبدیل شود.',
]
export default function Index({ ref }: any) {
    return (
        <section ref={ref} className='w-full flex flex-col justify-center items-center py-[60px] p-[30px] bg-white rounded-xl max-w-6xl m-auto'>
            <h1 className='text-[#284D2C] text-2xl font-bold xl:text-4xl'>منشور اخلاقی کــارکــنــان</h1>
            <section className='flex flex-row flex-wrap justify-center items-center gap-10 2xl:gap-12 max-w-5xl 2xl:max-w-7xl my-16 2xl:my-20'>
                {items.map((item, index) => {
                    return (
                        <CardItem key={index} index={index} title={item.title} icon={item.icon} />
                    )
                })}

            </section>
            <h2 className="text-[#284D2C] text-2xl xl:max-w-md font-medium xl:font-bold xl:text-2xl 2xl:max-w-xl">
                مفاد منشور اخلاقی کارکنان صندوق بیمه کشاورزی
            </h2>
            <section className=" mt-[25px] text-[13px] xl:text-[14px] leading-loose font-medium">
                {items2.map((item, index) => (
                    <p key={index}>
                        {index + 1}. {item}
                    </p>
                ))}
            </section>
            <h2 className='text-[#284D2C] text-2xl max-w-md 2xl:max-w-full font-bold mt-[50px]'>نحوه رفتار و برخورد با ارباب رجوع و همکاران</h2>
            <section className='mt-[25px] text-[13px] xl:text-[16px] leading-relaxed'>
                {items3.map((item, index) => {
                    return (
                        <p key={index} className="text-justify">
                            {index + 1}.{item}
                        </p>
                    )
                })}
            </section>
        </section>
    )
}