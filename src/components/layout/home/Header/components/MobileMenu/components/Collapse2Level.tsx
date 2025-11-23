import { ChevronDown, ChevronUp } from "lucide-react"
import Collapse from './Collapse'
import { useState } from "react"

export default function Index({ title, subMenus1 }: any) {
    const [isOpen, setIsOpen] = useState(false)
    return <div className="w-full flex flex-col">
        <button onClick={() => setIsOpen(!isOpen)} className="w-full flex gap-1 items-center xl:text-xs 2xl:text-[14px] text-black">
            {title}
            {isOpen ? <ChevronUp className="w-[15px]" /> : <ChevronDown className="w-[15px]" />}

        </button>
        {isOpen && <div className="flex flex-col gap-3  text-sm mt-2 text-slate-800">
            {subMenus1.map((item: any, index: number) => (
                <Collapse key={index} title={item.title} subMenus={item.subMenus} />
            ))}
        </div >}

    </div>
}
