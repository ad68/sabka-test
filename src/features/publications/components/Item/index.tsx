
import Image from "next/image";
import Link from "next/link";
export default function Index({ date, href, imageSrc, title }: any) {
    return <Link href={href} className="w-full relative  cursor-pointer  group transition-all duration-300 ease-in-out min-h-2">
        <div className="w-full relative border-t-[2px] border-primary p-3 rounded-lg py-6 h-[430px] bg-white shadow-sm hover:shadow-xl cursor-pointer group transition-all duration-300 ease-in-out min-h-2">
            <div className="h-[300px] w-full bg-slate-50 rounded-lg flex justify-center items-center">
                <Image width={400} height={400} className="rounded-[10px] w-[90%] max-h-[90%]" src={imageSrc} alt="" />
            </div>
            <div>
                <div className="text-primary gap-2 rounded-xl flex items-center mt-1 px-3 py-2  text-sm font-bold">
                    <p className="leading-6">
                        {title}
                    </p>
                </div>
                <div className="text-xs flex justify-end px-3 mt-2 font-bold">{date}</div>
            </div>
        </div>
    </Link>
}
