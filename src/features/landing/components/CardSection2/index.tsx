"use client";
import CardItem from "./components/CardItem";
import { TreesIcon } from "@/assets/icons/TreesIcon";
import { LiveStockIcon } from "@/assets/icons/LiveStockIcon";
import { TreeIcon } from "@/assets/icons/TreeIcon";
import { InsuranceAmtIcon } from "@/assets/icons/InsuranceAmtIcon";
import { WalletIcon } from "@/assets/icons/WalletIcon";
import { CropsIcon } from "@/assets/icons/CropsIcon";
import React from "react";
const cardItems = [
    {
        title: "بیمه محصولات زراعی",
        icon: <CropsIcon className="text-white" />,
        desc: "این بیمه از گروه‌های مختلف محصولات مانند نباتات صنعتی، دانه‌های روغنی، نباتات علوفه‌ای، حبوبات و سبزی و صیفی در برابر خسارات طبیعی محافظت می‌کند.",
        link: "",
    },
    {
        title: "بیمه محصولات باغی و منابع طبیعی",
        icon: <TreesIcon className="text-white" />,
        desc: "این بیمه شامل محصولاتی مانند آلبالو، انجیر دیم و همچنین مراتع و عملیات اصلاحی آن‌ها در برابر خسارات محیطی و اقلیمی است.",
        link: "",
    },
    {
        title: "بیمه دام، طیور و آبزیان",
        icon: <LiveStockIcon className="text-white" />,
        desc: "این بیمه از گاوهای اصیل در واحدهای سنتی بهداشتی، گاوهای بومی آمیخته و گاوهای مراکز اصلاح نژاد در برابر خسارات احتمالی حمایت می‌کند.",
        link: "",
    },
    {
        title: "بیمه عوامل تولید کشاورزی",
        icon: <TreeIcon className="text-white" />,
        desc: "این بیمه شامل پوشش‌هایی مانند بیمه تنه درختان انار، انگور آبی، بادام، پسته و سایر درختان میوه در برابر خسارات و آسیب‌های احتمالی است.",
        link: "",
    },
    {
        title: "تعرفه‌های بیمه‌گری",
        icon: <InsuranceAmtIcon className="text-white" />,
        desc: "شامل جدول نرخ‌ها و شرایط بیمه برای انواع محصولات و فعالیت‌های کشاورزی، متناسب با هر استان و نوع پوشش بیمه‌ای.",
        link: "",
    },
    {
        title: "فرایندهای بیمه و خسارت",
        icon: <WalletIcon className="text-white" />,
        desc: "راهنمای گام‌به‌گام برای ثبت‌نام، انتخاب نوع بیمه، پرداخت حق بیمه و دریافت بیمه‌نامه کشاورزی ،روند اعلام خسارت، ارزیابی و دریافت غرامت.",
        link: "",
    },
];

export default function Index() {

    return (
        <section className="max-w-7xl px-5 xl:px-0 m-auto grid xl:grid-cols-3 xl:gap-4 xl:gap-y-[60px]">
            {cardItems.map((item, index) => (
                <CardItem key={index} title={item.title} icon={item.icon} desc={item.desc} />
            ))}
        </section>
    );
}
