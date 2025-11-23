
import Link from "next/link";

import React from "react";


export default function Index({
    img,
    title,
    date,
    link,
    desc,
    isSelected,
}: any) {
    return (
        <section className={`rounded-3xl w-full relative flex flex-col ${isSelected ? "h-full max-h-[400px] w-0 md:w-[300px]" : "w-fit h-[280px]"}`}>
            <section className="absolute inset-0 bg-cover bg-center rounded-tr-3xl rounded-bl-3xl" style={{ backgroundImage: `url(${img})` }}></section>

            <div className="flex-grow"></div>
            {!isSelected &&
                <section className='bg-white p-2 w-[90%] rounded-xl mx-auto mb-2 relative text-right'>

                    <p className='font-bold text-sm'>{title}</p>

                    <section className='flex items-center justify-between gap-2 p-2'>
                        <Link href={link} className="flex items-center justify-center ">

                        </Link>
                        <span className='text-black text-xs'>{date}</span>
                    </section>

                </section>
            }
            {isSelected &&
                <section className='bg-secondary bg-opacity-90 flex-col p-2 w-[90%] rounded-xl mx-auto mb-2 relative'>
                    <p className='font-bold text-sm text-white'>{title}</p>
                    <p className='flex items-center justify-between gap-1 p-2'>
                        <span className='text-white text-xs'>{date}</span>
                    </p>
                    <p className='text-sm text-white my-2'>{desc}</p>
                    <Link href={link} className="flex items-center justify-center ">
                        <button className="group-hover:bg-white p-2 text-sm bg-white flex flec-row gap-2 w-full justify-center items-center font-bold
                         text-black shadow-[0px_10px_14px_-60px_#BB473373] border-b-[2px] border-b-white
                        rounded-full transition-all duration-300">
                            بیشتر بخوانید

                        </button>
                    </Link>
                </section>
            }
        </section>
    )
}