"use client";
import CardItem from "./components/CardItem";
import { TreesIcon } from "@/assets/icons/TreesIcon";
import { LiveStockIcon } from "@/assets/icons/LiveStockIcon";
import { TreeIcon } from "@/assets/icons/TreeIcon";
import { InsuranceAmtIcon } from "@/assets/icons/InsuranceAmtIcon";
import { WalletIcon } from "@/assets/icons/WalletIcon";
import { CropsIcon } from "@/assets/icons/CropsIcon";
import { useIsMobile } from "@/features/products/hooks/useIsMobile";
import React, { useEffect, useRef, useState } from "react";

const cardItems = [
    {
        title: "بیمه محصولات زراعی",
        icon: <CropsIcon />,
        desc: "این بیمه از گروه‌های مختلف محصولات مانند نباتات صنعتی، دانه‌های روغنی، نباتات علوفه‌ای، حبوبات و سبزی و صیفی در برابر خسارات طبیعی محافظت می‌کند.",
        link: "",
    },
    {
        title: "بیمه محصولات باغی و منابع طبیعی",
        icon: <TreesIcon />,
        desc: "این بیمه شامل محصولاتی مانند آلبالو، انجیر دیم و همچنین مراتع و عملیات اصلاحی آن‌ها در برابر خسارات محیطی و اقلیمی است.",
        link: "",
    },
    {
        title: "بیمه دام، طیور و آبزیان",
        icon: <LiveStockIcon />,
        desc: "این بیمه از گاوهای اصیل در واحدهای سنتی بهداشتی، گاوهای بومی آمیخته و گاوهای مراکز اصلاح نژاد در برابر خسارات احتمالی حمایت می‌کند.",
        link: "",
    },
    {
        title: "بیمه عوامل تولید کشاورزی",
        icon: <TreeIcon />,
        desc: "این بیمه شامل پوشش‌هایی مانند بیمه تنه درختان انار، انگور آبی، بادام، پسته و سایر درختان میوه در برابر خسارات و آسیب‌های احتمالی است.",
        link: "",
    },
    {
        title: "تعرفه‌های بیمه‌گری",
        icon: <InsuranceAmtIcon />,
        desc: "شامل جدول نرخ‌ها و شرایط بیمه برای انواع محصولات و فعالیت‌های کشاورزی، متناسب با هر استان و نوع پوشش بیمه‌ای.",
        link: "",
    },
    {
        title: "فرایندهای بیمه و خسارت",
        icon: <WalletIcon />,
        desc: "راهنمای گام‌به‌گام برای ثبت‌نام، انتخاب نوع بیمه، پرداخت حق بیمه و دریافت بیمه‌نامه کشاورزی ،روند اعلام خسارت، ارزیابی و دریافت غرامت.",
        link: "",
    },
];

export default function Index() {
    const isMobile = useIsMobile();
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const onMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };
    const onMouseLeave = () => setIsDragging(false);
    const onMouseUp = () => setIsDragging(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // scroll speed
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };
    const scrollToIndex = (index: number) => {
        if (!scrollRef.current) return;
        const targetCard = scrollRef.current.children[index] as HTMLElement;
        if (!targetCard) return;

        scrollRef.current.scrollTo({
            left: targetCard.offsetLeft - scrollRef.current.offsetLeft,
            behavior: "smooth",
        });
        setCurrentIndex(index);
    };
    const onScroll = () => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const containerCenter = container.scrollLeft + container.offsetWidth / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        Array.from(container.children).forEach((child, idx) => {
            const el = child as HTMLElement;
            const cardCenter = el.offsetLeft + el.offsetWidth / 2;
            const distance = Math.abs(containerCenter - cardCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = idx;
            }
        });

        setCurrentIndex(closestIndex);
    };
    useEffect(() => {
        const ref = scrollRef.current;
        if (!ref) return;
        ref.addEventListener("scroll", onScroll);
        return () => ref.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <>
            {isMobile ? (<>
                <section
                    ref={scrollRef}
                    className="flex gap-10 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing px-20
                     py-10 w-full
                    "
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                >
                    {cardItems.map((item, idx) => (
                        <section
                            key={idx}
                            className="flex-shrink-0 transition-transform duration-300 ease-in-out"
                        >
                            <CardItem {...item} index={idx} />
                        </section>
                    ))}
                </section>
                <section className="flex justify-center mt-4 gap-2">
                    {cardItems.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-3 h-3 rounded-full transition-colors ${currentIndex === idx ? "bg-[#35663A] rounded-3xl w-6" : "bg-gray-400 w-3"
                                }`}
                            onClick={() => scrollToIndex(idx)}
                        />
                    ))}
                </section>
            </>

            ) : (
                <section className="w-full flex flex-row flex-wrap max-w-6xl mx-auto gap-10 justify-center items-center p-10">

                    {cardItems.map((carItem, index) => (
                        <CardItem key={index} {...carItem} index={index} />
                    ))}
                </section>
            )}
        </>
    );
}
