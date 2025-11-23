import Image from "next/image";
import ThirdSectionBg from "@/assets/img/about/ThirdSectionbg.png";

export default function Index({ ref }: any) {
    return (
        <section ref={ref} className='w-full relative flex flex-col xl:flex-row  gap-[57px] justify-center items-center px-[20px] py-[60px] '
            style={{ backgroundImage: `url(${ThirdSectionBg.src})` }}
        >
            <section className="w-full xl:w-[525px]">
                <h3 className='font-medium leading-snug text-2xl xl:text-4xl xl:font-bold text-[#fff] '>وظايف و حدود عمليات صندوق بيمه كشاورزی</h3>
                <article className="text-white font-medium text-justify mt-[17px]">
                    <p>
                        ماده واحده قانون بیمه کشاورزی مصوب 87/10/22
                    </p>
                    <p >
                        هدف صندوق، انجام بيمه انواع محصولات كشاورزي، دام، طيور، زنبورعسل، كرم ابريشم و آبزيان پرورشي در مقابل خسارتهاي ناشي از سوانح طبيعي و حوادث قهري نظير تگرگ، طوفان، بادگرم، خشكسالي، زلزله، سيل، سرمازدگي و يخبندان، آتش سوزی، صاعقه، آفات و امراض نباتي عمومي و قرنطينه­ اي، امراض واگير حيواني عمومي و قرنطينه­ اي و همچنین بیمه ابنیه، تأسیسات، مستحدثات، قنوات، چاههای آب کشاورزی، تأسیسات آبیاری، فعالیت های کشاورزی و عوامل تولید نظیر ماشین آلات، ابزار و ادوات کشاورزی در قبال حوادث بیمه پذیر به عنوان وسيله­ اي براي نيل به اهداف و سياستهاي بخش كشاورزي مي ­باشد.
                    </p>
                </article>
            </section>
            <Image src='/assets/img/about/ThirdSection.png' alt='' width={437} height={356} className='object-cover rounded-3xl' />

        </section>
    )
}