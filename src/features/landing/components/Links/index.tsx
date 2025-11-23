// components/CenteredSlider.tsx
'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const links = [
    {
        title: "پایگاه اطلاع رسانی مقام معظم رهبری",
        link: "https://farsi.khamenei.ir",
        img: "/assets/img/landing/leader.webp"
    },
    {
        title: "پایگاه اطلاع رسانی ریاست جمهوری",
        link: "https://president.ir/fa/",
        img: "/assets/img/landing/president.webp"
    },
    {
        title: "پایگاه اطلاع رسانی دولت",
        link: "https://dolat.ir",
        img: "/assets/img/landing/dolat.webp"
    },
    {
        title: "وزارت جهاد کشاورزی",
        link: "https://www.maj.ir",
        img: "/assets/img/landing/vezarat.png"
    },
    {
        title: "بانک کشاورزی",
        link: "https://www.bki.ir",
        img: "/assets/img/landing/bank.png"
    },
    {
        title: "بیمه مرکزی جمهوری اسلامی ایران",
        link: "https://www.centinsur.ir",
        img: "/assets/img/landing/bimeh.png"
    },
    /* {
        title: "سازمان هواشناسی کشور",
        link: "https://www.irimo.ir/far/index.php"
    },
    {
        title: "مجلس شورای اسلامی",
        link: "https://www.parliran.ir"
    },

    {
        title: "پایگاه اطلاع رسانی پژوهشکده بیمه",
        link: "https://www.irc.ac.ir/fa-IR/Irc/1/page/%D8%B5%D9%81%D8%AD%D9%87-%D8%A7%D8%B5%D9%84%DB%8C"
    }, */
    /* {
        title: "پایگاه اطلاع رسانی سازمان نظام مهندسی کشاورزی و منابع طبیعی",
        link: "https://www.iaeo.org"
    } */
];
function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 100, width: '40px', height: "40px", borderRadius: "100%", background: "#35663a", }}
            onClick={onClick}
        >
            <ChevronLeft className="text-white" />
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 100, width: '40px', height: "40px", borderRadius: "100%", background: "#35663a" }}
            onClick={onClick}
        >
            <ChevronRight className="text-white" />
        </div>
    );
}
const CenteredSlider = () => {
    const settings = {

        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0px",
                },
            },
        ],
    };
    return (
        <div className="max-w-7xl m-auto links">
            <div className="px-4 py-8  m-auto">
                <Slider {...settings} >
                    {links.map((item, index) => (
                        <div key={index} className="px-10 cursor-pointer">
                            <Link href={item.link} className="flex gap-4 justify-center hover:border-primary transition-all items-center  w-full rounded-3xl border shadow-md h-[50px] duration-300 slick-item py-5">

                                <span>{item.title}</span>
                                {item.img && <Image width={100} height={100} className="w-[40px]" src={item.img} alt="" />}
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    );
};
export default CenteredSlider;