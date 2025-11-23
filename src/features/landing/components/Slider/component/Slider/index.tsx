// components/CenteredSlider.tsx
'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Play from '@/assets/img/landing/play.png'
import Image from "next/image";
import Link from "next/link";
const images = [
    {
        image: "/assets/img/landing/MostViewImg3.png",
        title: "دوم مرداد 1404",
        description: "حضور نمایندگان سازمان برنامه و بودجه کشور در صندوق بیمه کشاورزی"
    },
    {
        image: "/assets/img/landing/MostViewImg2.png",
        title: "دوم مرداد 1404",
        description: "حضور نمایندگان سازمان برنامه و بودجه کشور در صندوق بیمه کشاورزی"
    },
    {
        image: "/assets/img/landing/MostViewImg3.png",
        title: "دوم مرداد 1404",
        description: "حضور نمایندگان سازمان برنامه و بودجه کشور در صندوق بیمه کشاورزی"
    },
    {
        image: "/assets/img/landing/MostViewImg2.png",
        title: "دوم مرداد 1404",
        description: "حضور نمایندگان سازمان برنامه و بودجه کشور در صندوق بیمه کشاورزی"
    },
    {
        image: "/assets/img/landing/MostViewImg3.png",
        title: "دوم مرداد 1404",
        description: "حضور نمایندگان سازمان برنامه و بودجه کشور در صندوق بیمه کشاورزی"
    },
    {
        image: "/assets/img/landing/MostViewImg2.png",
        title: "دوم مرداد 1404",
        description: "حضور نمایندگان سازمان برنامه و بودجه کشور در صندوق بیمه کشاورزی"
    },
];

const CenteredSlider = () => {
    const settings = {
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="px-4 py-8 relative">
            <Slider {...settings} className="-mx-3">
                {images.map((item, index) => (
                    <div key={index} className="cursor-pointer h-[400px] xl:h-[500px] px-[5px]">
                        <div className="transition-transform w-[250px] m-auto relative rounded-[10px] min-h-[300px]  shadow-[0px_20px_28px_-20px_#BB473366]  duration-300 slick-item">
                            <Image width={264} height={240} className="w-[250px] absolute left-0 z-0 rounded-[16px]" src={item.image} alt="slide" />
                            <div className="w-full flex justify-center absolute top-16">
                                <Image width={100} height={100} quality={100} className="w-[80px]  z-0 rounded-[16px]" src={Play} alt="play" />

                            </div>
                            <div className="text-center z-10  w-full right absolute  bottom-0 px-5 text-white flex flex-col justify-end">
                                <p className="font-light text-[12px] mt-[24px] text-end">
                                    {item.title}
                                </p>
                                <p className="font-medium text-[14px] mt-[4px] text-end">
                                    {item.description}
                                </p>
                                <Link className="w-[82px] ml-auto mt-[17px] h-[32px] bg-white rounded-[8px] text-black flex justify-center items-center" href="#">مشاهده </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CenteredSlider;