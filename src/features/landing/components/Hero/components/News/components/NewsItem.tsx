import Image from "next/image";
import Link from "next/link";

export default function Index({ id, title, img, date }: any) {
    return <Link href={"/news/" + id} className="w-full flex group transition-all duration-300 hover:bg-primary py-2 items-center gap-[12px]">
        <Image width={200} height={200} className="w-[119px] rounded-md" src={img} alt="" />
        <div className="w-[2px] h-[81px] bg-primary"></div>
        <div className="flex flex-col">
            <span className="text-sm text-[#A0A0A0] group-hover:text-white transition-all duration-300">{date}</span>
            <span className="text-sm font-bold group-hover:text-white transition-all duration-300">{title}</span>
        </div>
    </Link>
}
