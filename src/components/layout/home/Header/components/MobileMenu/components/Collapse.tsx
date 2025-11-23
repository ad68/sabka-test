import { ChevronDown, ChevronsLeft, ChevronUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Index({ title, subMenus }: any) {
    const [isOpen, setIsOpen] = useState(false)
    return <div className="w-full flex flex-col">
        <button onClick={() => setIsOpen(!isOpen)} className="w-full flex gap-1 items-center xl:text-xs 2xl:text-[14px] text-black">
            {title}
            {isOpen ? <ChevronUp className="w-[15px]" /> : <ChevronDown className="w-[15px]" />}

        </button>
        {isOpen && <div className="flex flex-col gap-3  text-sm mt-2 text-slate-800">
            {subMenus.map((item: any, index: number) => (
                <Link className="flex gap-1 items-center" href={item.href} key={index}>
                    <ChevronsLeft className="w-[15px] text-secondary" />
                    {item.title}</Link>
            ))}
        </div >}

    </div>
}
