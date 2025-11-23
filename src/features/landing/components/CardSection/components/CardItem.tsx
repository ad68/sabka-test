import { ArrowRTLIcon } from '@/assets/icons/ArrowRTL';
import Link from "next/link";

export default function Index({ title, icon, desc, link, index }: any) {
    const textColor = (index % 2 == 0) ? 'text-[#E9AA1E]' : 'text-[#558C5A]';
    const bgColor = (index % 2 == 0) ? '#E9AA1E' : '#558C5A';
    return (
        <div className="relative w-[300px] hover:shadow-2xl hover:-translate-y-2 transition-all">
            <div
                className={`
                    pointer-events-none absolute -right-4 top-2 bottom-2 w-3 mt-14
                    bg-[radial-gradient(circle,currentColor_2.5px,transparent_2.5px)]
                    [background-size:13px_13px] bg-repeat
                    ${textColor}
                    `}
            />
            <div
                className={`
                    pointer-events-none absolute -left-4 -top-3 bottom-40 w-3
                    bg-[radial-gradient(circle,currentColor_2.5px,transparent_2.5px)]
                    [background-size:13px_13px] bg-repeat
                        ${textColor}
                    `}
            />

            <div
                className={`
                    pointer-events-none absolute left-0 right-[50px] -top-4 h-3
                    bg-[radial-gradient(circle,currentColor_2.5px,transparent_2.5px)]
                    [background-size:13px_13px] bg-repeat
                    ${textColor}
                    `}
            />

            <div className="relative h-[400px] rounded-2xl bg-white p-6 shadow-xl flex flex-col justify-center">
                <span
                    className={`
                        pointer-events-none absolute -top-3 -right-3 block h-16 w-16
                        border-4  border-l-0 border-b-0
                        rounded-tr-[32px]
                        `}
                    style={{ borderColor: bgColor }}
                />

                <div className="flex justify-center mb-4">
                    {icon}

                </div>

                <h2 className="text-center font-bold mb-2">{title}</h2>

                <p className="text-center text-sm text-gray-600 leading-6">
                    {desc}
                </p>

                {/* <Link href={link}
                    className={`
                        absolute -bottom-0 -left-0 h-24 w-24 
                        [clipPath:polygon(0%_0%,0%_100%,100%_100%)]
                        rounded-tr-xl flex items-center justify-center
                        `}
                    style={{ backgroundColor: bgColor }}
                >
                    <ArrowRTLIcon className="w-4 h-4 text-white left-3 top-[3.5rem] absolute" />
                </Link> */}
                <Link
                    href={link}
                    className="absolute -bottom-0 -left-0 h-24 w-24 flex items-center justify-center rounded-bl-xl overflow-hidden"
                    style={{
                        backgroundColor: bgColor,
                        clipPath: "polygon(0% 0%, 0% 100%, 100% 100%)",
                    }}
                >
                    <ArrowRTLIcon className="w-4 h-4 text-white left-3 top-[3.5rem] absolute" />
                </Link>
            </div>
        </div>

    );
}
