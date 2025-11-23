"use client"
import React from "react";
import Image from "next/image";
import { LeafIcon } from "@/assets/icons/LeafIcon";
import LeafRightBg from '@/assets/img/landing/LeafRightBg.png';
import { useIsMobile } from "@/features/products/hooks/useIsMobile";
import News from './components/News'
import Gallery from './components/Gallery'
import Videos from './components/Videos'
import Publication from './components/Publication'
import useMediaSection from "../../hooks/useMediaSection";
export default function Index() {
    const { activeTab, setActiveTab, tabs } = useMediaSection()
    const isMobile = useIsMobile();
    return (
        <section className="w-full mt-[80px] relative">
            <Image
                alt=""
                width={700}
                height={900}
                className="w-[200px] xl:w-[400px] top-[-150px] absolute"
                src={LeafRightBg}
            />
            <div className="max-w-6xl m-auto justify-center">
                <div className="w-full mt-8 flex flex-col justify-center items-center gap-3">
                    <span className="flex flex-row gap-2">
                        کشاورزی، ستون خودکفایی ملی
                        <LeafIcon />
                    </span>
                    <p className="text-center text-xl md:text-3xl font-bold">دسترسی سریع به خدمات و اطلاعات</p>
                    <div className="text-center max-w-2xl">
                        با استفاده از تب‌های زیر، به آسانی به بخش‌های مختلف سامانه دسترسی پیدا کنید.
                    </div>
                </div>

                <div className="w-full z-50 relative mx-auto p-6 flex flex-col justify-center items-center gap-6">

                    {isMobile ? (
                        <section className="bg-[#F5F5F5] w-full h-auto p-2 overflow-scroll">
                            <div
                                className="flex gap-2 w-[600px]"
                            >
                                {tabs.map((item, idx) =>
                                    <li
                                        key={item.key}
                                        onClick={() => {
                                            setActiveTab(idx);
                                        }}
                                        className={`relative flex group flex-row gap-1 justify-center items-center w-40 rounded-md h-[40px] cursor-pointer flex-shrink-0 ${activeTab === idx ? "bg-[#35663A] text-white" : "bg-white"}`}
                                    >
                                        <item.icon
                                            className={`${activeTab === idx ? "bg-[#35663A] text-white" : "bg-white"
                                                } hover:text-white`}
                                        />
                                        {item.title}
                                    </li>)}
                            </div>
                        </section>
                    ) : (
                        <ul className="w-full flex flex-row justify-center items-center bg-[#F5F5F5] rounded-xl p-4 gap-6">
                            {tabs.map((item, idx) => {
                                return (
                                    <li
                                        onClick={() => {
                                            setActiveTab(idx);
                                        }}
                                        className={`relative flex group flex-row gap-1 justify-center items-center p-5 w-full rounded-md h-[40px] cursor-pointer ${activeTab === idx ? "bg-[#35663A] text-white" : "bg-white"}`}
                                        key={item.key}
                                    >
                                        <item.icon
                                            color="black"
                                            className={`${activeTab === idx ? "bg-[#35663A] text-[#e9aa1e]" : "bg-white"
                                                } hover:text-white`}
                                        />
                                        <span className={`${activeTab === idx ? "bg-[#35663A] text-[#e9aa1e]" : "bg-white"}`}>
                                            {item.title}
                                        </span>

                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
                <div>
                    {activeTab === 0 && <News />}
                    {activeTab === 1 && <Gallery />}
                    {activeTab === 2 && <Videos />}
                    {activeTab === 3 && <Publication />}
                </div>
            </div>



        </section>
    );
}
