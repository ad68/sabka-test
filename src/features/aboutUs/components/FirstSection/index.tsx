"use client"
import React from "react";
import Image from "next/image";
import Leaf from '@/assets/img/contactUs/leaf.png'
export default function Index() {
    /*   const scrollRef = useRef<HTMLDivElement>(null);
      const isDragging = useRef(false);
      const startX = useRef(0);
      const scrollLeft = useRef(0);
  
      const onMouseDown = (e: React.MouseEvent) => {
          if (!scrollRef.current) return;
          isDragging.current = true;
          startX.current = e.pageX - scrollRef.current.offsetLeft;
          scrollLeft.current = scrollRef.current.scrollLeft;
      };
  
      const onMouseLeave = () => (isDragging.current = false);
      const onMouseUp = () => (isDragging.current = false);
  
      const onMouseMove = (e: React.MouseEvent) => {
          if (!isDragging.current || !scrollRef.current) return;
          e.preventDefault();
          const x = e.pageX - scrollRef.current.offsetLeft;
          const walk = (x - startX.current) * 1; // scroll speed factor
          scrollRef.current.scrollLeft = scrollLeft.current - walk;
      };
   */
    return (
        <section className="flex flex-col justify-center items-center mb-[70px] 2xl:mb-[120px]">
            <section className="flex flex-col justify-center items-center my-[48px] 2xl:my-[100px] max-w-2xl 2xl:max-w-4xl gap-4">
                <p className="text-[#284D2C] flex items-center relative  left-0 text-[24px] font-medium xl:font-bold 2xl:text-[48px] text-center xl:mb-3">

                    با هم، آینده‌ای
                    <span className="text-primary relative font-bold bg-[#DAFFDE] p-1">
                        <Image className="w-[27px] absolute top-[-20px] left-0" src={Leaf} alt="" />
                        ســرســـبز
                    </span> می‌سازیم
                </p>
                {/*  <p className="text-[16px] text-[#284D2C] 2xl:text-2xl text-center">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                    گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                </p> */}
            </section>

            <section

                className="about-slider-container relative w-full max-w-5xl 2xl:max-w-7xl mx-auto flex justify-start items-center gap-4 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"

            >
                <div
                    className="about-slider-slide w-64 h-72 2xl:w-80 2xl:h-80 rounded-xl overflow-hidden shadow-lg flex-shrink-0"
                    style={{ ["--angle" as any]: "-15deg", ["--depth" as any]: "-80px" }}
                >
                    <Image
                        src="/assets/img/about/AboutSliderPic1.png"
                        alt=""
                        fill
                        className="w-full h-full object-cover"
                    />
                </div>

                <div
                    className="about-slider-slide w-64 h-72 2xl:w-80 2xl:h-80 rounded-xl overflow-hidden shadow-xl z-10 flex-shrink-0"
                    style={{ ["--angle" as any]: "-5deg", ["--depth" as any]: "-80px" }}
                >
                    <Image
                        src="/assets/img/about/AboutSliderPic2.png"
                        alt=""
                        fill
                        className="w-full h-full object-cover"
                    />
                </div>

                <div
                    className="about-slider-slide w-64 h-72 2xl:w-80 2xl:h-80 rounded-xl overflow-hidden shadow-lg flex-shrink-0"
                    style={{ ["--angle" as any]: "5deg", ["--depth" as any]: "-80px" }}
                >
                    <Image
                        src="/assets/img/about/AboutSliderPic3.png"
                        alt=""
                        fill
                        className="w-full h-full object-cover"
                    />
                </div>

                <div
                    className="about-slider-slide w-64 h-72 2xl:w-80 2xl:h-80 rounded-xl overflow-hidden shadow-lg flex-shrink-0"
                    style={{ ["--angle" as any]: "15deg", ["--depth" as any]: "-80px" }}
                >
                    <Image
                        src="/assets/img/about/AboutSliderPic4.png"
                        alt=""
                        fill
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        </section>
    );
}
