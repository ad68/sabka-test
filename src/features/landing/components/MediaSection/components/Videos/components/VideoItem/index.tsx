import { gregorianToJalali } from "@/utils";
import { Calendar1Icon, PlayCircleIcon } from "lucide-react";
export default function Index({ playVideo, videoSrc, date, title, fileName }: any) {
    return <div onClick={() => playVideo(videoSrc)} className="w-full relative  p-3 rounded-lg py-6 bg-white shadow-sm hover:shadow-xl cursor-pointer group transition-all duration-300 ease-in-out min-h-2">
        <div className="w-full flex justify-center items-center h-[200px] relative bg-primary">
            <PlayCircleIcon className="w-[100px] text-secondary group-hover:text-black transition-all duration-300 h-[100px]" />
        </div>
        <div>
            <div className="text-primary gap-2 rounded-xl flex items-center mt-1 px-3 py-2  text-sm font-bold">
                <PlayCircleIcon className="w-[30px] text-secondary group-hover:text-black transition-all duration-300" />
                <p className="leading-6">
                    {title ? title : fileName}
                </p>
            </div>
        </div>

        <div className="absolute bottom-2 text-sm justify-end left-4 flex items-center gap-1">
            <Calendar1Icon className="w-[16px] text-secondary" />
            <span className="ltr">تاریخ : {gregorianToJalali(date)}</span>
        </div>
    </div>
}
