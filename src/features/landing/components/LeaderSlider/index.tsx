"use client";
/* import { CurveArrowIconTwo } from "@/assets/icons/CurveArrowIconTwo"; */
import { LeafIcon } from "@/assets/icons/LeafIcon";
/* import { RightArrowIcon } from "@/assets/icons/RightArrowIcon"; */
/* import EventItem from "@/features/landing/components/events/components/item/Item";
import { Event } from "@/features/landing/components/events/types"; */
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { useIsMobile } from "@/features/products/hooks/useIsMobile";
import EventItem from './components/item/Item'
import { ChevronLeft, ChevronRight } from "lucide-react";
const eventItems: any[] = [
    {
        img: "/assets/img/events/ev1.png",
        title: "اهمیت کشاورزی دانش بنیان و امنیت غذایی در کلام مقام معظم رهبری",
        date: "1404/06/12",
        link: "/",
        desc: "",
        isFavorite: false,
    },
    {
        img: "/assets/img/events/ev2.png",
        title: "اهمیت کشاورزی دانش بنیان و امنیت غذایی در کلام مقام معظم رهبری",
        date: "1404/06/12",
        link: "/",
        desc: "",
        isFavorite: false,
    },
    {
        img: "/assets/img/events/ev3.png",
        title: "اهمیت کشاورزی دانش بنیان و امنیت غذایی در کلام مقام معظم رهبری",
        date: "1404/06/12",
        link: "/",
        desc: "",
        isFavorite: false,
    },
    {
        img: "/assets/img/events/ev1.png",
        title: "اهمیت کشاورزی دانش بنیان و امنیت غذایی در کلام مقام معظم رهبری",
        date: "1404/06/12",
        link: "/",

        isFavorite: false,
    },
];

export default function Index() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const sliderRef = useRef<Slider>(null);
    const isMobile = useIsMobile();

    const prevEvent = () => {
        setSelectedIndex((prev) => (prev === 0 ? eventItems.length - 1 : prev - 1));
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const nextEvent = () => {
        setSelectedIndex((prev) => (prev === eventItems.length - 1 ? 0 : prev + 1));
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const otherEvents = eventItems.filter((_, i) => i !== selectedIndex);

    const settings = {
        infinite: true,
        speed: 400,
        slidesToShow: Math.min(3, otherEvents.length),
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: false,
        draggable: isMobile,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <section
            className="relative w-full max-w-sm md:max-w-5xl m-auto mt-[100px] flex flex-row justify-center h-[400px] overflow-hidden">
            <section className="w-full flex flex-col justify-between gap-1  items-center">
                <section className="w-full flex flex-col gap-1 p-5">
                    <section className="w-full  flex flex-row justify-center xl:justify-between items-center text-sm">
                        <div className=" ">

                            <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-right">
                                <span className="flex flex-row gap-2 items-center">
                                    کشاورزی، ستون خودکفایی ملی
                                    <LeafIcon className="w-5 h-5" />
                                </span>

                            </div>
                            <div className="text-black text-[28px] mt-3 font-bold">رهنمودهای رهبر انقلاب</div>
                        </div>

                    </section>
                    <section className="relative flex flex-col gap-2 tracking-wider ">

                        {!isMobile && (
                            <section>
                                <button
                                    onClick={prevEvent}
                                    className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full z-10 bg-[#00000029]"
                                >
                                    <ChevronLeft className="w-5 h-5" color="white" />
                                </button>
                                <button
                                    onClick={nextEvent}
                                    className="absolute top-1/2 left-10 transform -translate-y-1/2 p-2 rounded-full z-10 bg-[#72814E]"
                                >
                                    <ChevronRight className="w-5 h-5" color="white" />
                                </button>
                            </section>
                        )}

                    </section>
                </section>

                <section className="max-w-2xl ">
                    <Slider {...settings} ref={sliderRef}>
                        {otherEvents.map((item, i) => (
                            <section key={i} className='px-2'>
                                <EventItem {...item} isSelected={false} />
                            </section>
                        ))}
                    </Slider>
                </section>
            </section>

            <section className='mr-5 hidden xl:block'>
                <EventItem {...eventItems[selectedIndex]} isSelected={true} />
            </section>
        </section>
    );
}
