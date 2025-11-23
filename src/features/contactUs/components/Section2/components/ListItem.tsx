import { ContactCheckIcon } from "@/assets/icons/ContactCheckIcon";
import { ReactNode } from "react";

export default function Index({ children }: { children: ReactNode }) {
    return <div className="text-[20px] font-medium flex items-center gap-2">
        <ContactCheckIcon className="text-[#e9aa1e] w-[20px] h-[20px]" />
        <p className="w-[90%]">
            {children}
        </p>

    </div>
}
