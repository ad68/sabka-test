import { BellDotIcon, LucideSettings, MailIcon } from "lucide-react";
export default function Index() {
    return <section className="bg-white rounded-xl w-full h-[150px] mt-[40px] shadow-xl p-[1px]">
        <img src="/images/dashboard/avatar.jpg" className="w-[80px] h-[80px] rounded-full m-auto border-[4px] shadow-xl mt-[-35px] border-primary" />
        <h3 className="text-md font-semibold text-center mt-[8px] text-slate-500">نام کاربر</h3>
        <div className="flex justify-center gap-2 mt-2">
            <button className="flex justify-center border hover:bg-slate-100 transition-all items-center w-[40px] h-[40px] rounded-full"><LucideSettings /></button>
            <button className="flex justify-center border hover:bg-slate-100 transition-all items-center w-[40px] h-[40px] rounded-full"><BellDotIcon /></button>
            <button className="flex justify-center border hover:bg-slate-100 transition-all items-center w-[40px] h-[40px] rounded-full"><MailIcon /></button>
        </div>
    </section>
}
