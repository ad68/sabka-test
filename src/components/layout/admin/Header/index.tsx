import { ChevronLeft, Power } from "lucide-react";
import useHeader from "./useHeader";

export default function Index() {
    const { pageTitle } = useHeader()
    return <header className="w-full pr-[310px] flex justify-between items-center px-2 h-[50px] bg-primary">
        <div className="text-white font-bold flex items-center gap-[1px]">
            <ChevronLeft />
            <h2>{pageTitle}</h2>
        </div>
        <div className="flex">
            {/*  <button className="hover:bg-[#f7fef24d] transition-all ml-2 rounded-full p-2 px-3 flex gap-1 justify-center items-center">
                <CircleUser className="text-white w-[35px]" />
                <span className="text-sm text-white">نام کاربر</span>
            </button>
            <button className="hover:bg-[#f7fef24d] relative  transition-all rounded-full p-2 flex justify-center items-center">
                <span className="w-[20px] h-[20px] flex justify-center items-center pt-1 rounded-full absolute top-0 right-0 bg-secondary-600 text-white  text-[12px]">4</span>
                <Bell className="text-white w-[23px]" />
            </button> */}
            <button className="hover:bg-[#f7fef24d] transition-all rounded-full p-2 flex justify-center items-center">
                <Power className="text-white w-[23px]" />
            </button>
        </div>
    </header>
}
