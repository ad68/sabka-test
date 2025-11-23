import Link from "next/link";
import {InstagramIcon} from "@/assets/icons/InstagramIcon";
import {TelegramIcon} from "@/assets/icons/TelegramIcon";
import {WhatsappIcon} from "@/assets/icons/WhatsappIcon";
import {YouTubeIcon} from "@/assets/icons/YouTubeIcon";
import React from "react";

export default function Index() {
    return (
        <section className="flex flex-row justify-center items-center gap-2 ml-4">
            <Link href="#" >
                <InstagramIcon/>
            </Link>
            <Link href="#" >
                <TelegramIcon />
            </Link>
            <Link href="#" >
                <WhatsappIcon />
            </Link>
            <Link href="#" >
                <YouTubeIcon />
            </Link>
        </section>
    )
}