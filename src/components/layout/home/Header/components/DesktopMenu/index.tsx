'use client'
import { ChevronDown, ChevronsLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
/* import { useEffect } from "react"; */


import { menus } from "@/constants/global";

export default function Index({ menuClass }: any) {
    /*  useEffect(() => {
          window.addEventListener("scroll", listenScrollEvent);
     
     }, []); */
    // ─── Functions ──────────────────────────────────────────────────────────────────
    /*     const listenScrollEvent = (e: any) => {
            if (window.scrollY > 0) {
                setMenuClass("#5606a8");
            } else {
                setMenuClass(mode === "dark" ? "#5606a8" : mode === "light" ? "#FFFFFF26" : "");
            }
        }; */
    //

    return (
        <>
            <nav className="menuBox z-[9998] flex" style={{ backgroundColor: menuClass }}>
                <div className="wrapper relative bg-[#e9aa1e] w-[80%]   h-[80px] items-center xl:flex xl:px-[20px] 2xl:px-[50px]">
                    <div className="w-[100px] flex flex-col items-center">
                        <Link href="/" className="xl:w-[130px] 2xl:w-[140px] relative z-10 shadow-xl rounded-b-full px-5 2xl:px-3 py-6 mt-[80px] flex justify-center border-[3px] border-primary items-center bg-white">
                            <Image width={100} height={100} className="w-full " src="/assets/img/sandoogh-logo.png" alt="logo" />
                        </Link>
                        {/* <span className="text-[10px] font-semibold">صندوق بیمه کشاورزی</span> */}
                    </div>
                    <ul className="nav-links items-center xl:mr-[20px] 2xl:mr-[70px]">
                        {menus.map((item: any, index: number) => (<li className="mr-3 h-full flex items-center relative 2xl:px-2" key={index}>
                            {item.href && <Link className=" xl:text-xs 2xl:text-[14px] font-bold text-black" href={item.href} >
                                {item.title}
                            </Link>}
                            {item.children && !item.big &&
                                <>
                                    <button className="flex gap-1 items-center font-bold xl:text-xs 2xl:text-[14px] text-black">
                                        {item.title}
                                        <ChevronDown className="w-[15px]" />
                                    </button>
                                    <div className="mega-box">
                                        <div className="content overflow-hidden relative rounded-xl">
                                            <ul className="flex flex-col justify-center gap-1">
                                                {item?.children.map((item: any, index: number) => (
                                                    <li key={index} className="hover:bg-[#7BB28033] transition-all px-[4px] py-[4px] rounded-md">
                                                        <Link className="text-sm flex items-center gap-2" href={item.href}>
                                                            <ChevronsLeft className="w-[15px] text-secondary" />
                                                            {item.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            }
                            {item.children && item.big &&
                                <>
                                    <button className="flex gap-1 items-center font-bold xl:text-xs 2xl:text-[14px] text-black">
                                        {item.title}
                                        <ChevronDown className="w-[15px]" />
                                    </button>
                                    <div className="mega-box big">
                                        <div className="content overflow-hidden relative rounded-xl">
                                            <div className="flex gap-2">
                                                {item.children.map((item: any, index: number) => (<div key={index} className="flex flex-col gap-2">
                                                    <span className="font-bold text-sm">{item.title}</span>
                                                    <span className="block h-1 bg-primary w-[30px]"></span>
                                                    <div className="flex flex-col gap-2 w-[200px]">
                                                        {
                                                            item.subMenus.map((item: any, index: number) => (
                                                                <Link key={index} className="text-sm font-light hover:bg-[#7BB28033]  transition-all rounded-sm flex items-center gap-1" href={item.href}>
                                                                    <ChevronsLeft className="w-[15px] text-secondary" />
                                                                    {item.title}</Link >
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </>
                            }
                        </li>))}
                    </ul>
                </div>
                <div className="tri mr-[-1px]"></div>
                <div className="flex items-center">
                    <div className="flex items-center gap-2">
                        <Image width={100} height={100} src="/assets/img/landing/slogan.png" className="w-[60px] h-[60px] xl:w-[70px] xl:h-[70px]" alt="" />
                        <Image width={100} height={100} src="/assets/img/landing/iran-flag.webp" className="w-[55px] h-[55px] xl:w-[65px] xl:h-[65px]" alt="" />
                    </div>
                    {/*  <a className="flex flex-row items-center gap-1 text-xs px-2 justify-center border-l-[1px] border-l-black">
                        <span className="font-bold text-[14px]">66557715</span>
                        <EmailIcon className='text-primary w-[20px] h-[20px]' />
                    </a>
                    <a href="tel:02164009000" className="flex flex-row items-center gap-1 font-bold text-[14px] justify-center px-2">
                        <span>64009000</span>
                        <PhoneIcon className='w-[20px] h-[20px] text-primary' />
                    </a> */}
                    {/*   <button className="w-[40px] h-[40px] flex items-center justify-center gap-[8px] border-[1px] border-black py-[10px] ml-2 mr-6 rounded-lg ">
                        <span>Fa</span>
                    </button> */}
                    {/*   <button className="flex h-[40px] items-center justify-center bg-[#35663A] text-white px-4 py-[10px] rounded-lg text-sm font-semibold">
                        <UserIcon />
                        <span>ورود</span>
                    </button> */}
                </div>
            </nav>
        </>
    );
}
