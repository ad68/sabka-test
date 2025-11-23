import { PlayCircleIcon } from "lucide-react";
export default function Index({ playVideo, videoSrc, date, title }: any) {
    return <div onClick={() => playVideo(videoSrc)} className="w-full relative border-t-[2px] border-primary p-3 rounded-lg py-6 bg-white shadow-sm hover:shadow-xl cursor-pointer group transition-all duration-300 ease-in-out min-h-2">
        <div className="w-full h-[180px] bg-primary"></div>
        <div className="w-full mt-[60px] flex justify-center items-center top-0 absolute">
            <PlayCircleIcon className="w-[100px] text-secondary group-hover:text-black transition-all duration-300 h-[100px]" />
        </div>
        <div>
            <div className="text-primary gap-2 rounded-xl flex items-center mt-1 px-3 py-2  text-sm font-bold">
                <PlayCircleIcon className="w-[30px] text-secondary group-hover:text-black transition-all duration-300" />
                <p className="leading-6">
                    {title}
                </p>
            </div>
        </div>

        <div className="text-xs flex justify-end px-3 mt-2 font-bold">{date}</div>
    </div>
}
