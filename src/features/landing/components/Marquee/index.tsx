
import { news } from "@/constants/global";
import { Calendar1Icon } from "lucide-react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Index() {
    return (
        <section className="w-full max-w-7xl m-auto  py-2">
            <Marquee direction={"right"} pauseOnHover gradient={true} speed={40}>
                {news.map((item, index) => (
                    <Link dir="rtl" key={index} className="mr-[20px] hover:text-black transition-all border-r border-l px-4 border-secondary flex items-center gap-1 text-primary" href={`/news/${item.id}`}>
                        <p>{item.title}</p>
                        <div className="flex items-center gap-2 text-sm bg-primary text-white px-2 py-1 rounded-full">
                            <Calendar1Icon className="w-[15px]" />
                            <div className="font-light">تاریخ: {item.date}</div>
                        </div>

                    </Link>
                ))}
            </Marquee>
        </section>

    );
}