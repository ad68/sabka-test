"use client";
import React from "react";
import Image from "next/image";

const images = [
    "/assets/img/about/FifthSectionPic1.png",
    "/assets/img/about/FifthSectionPic2.png",
    "/assets/img/about/FifthSectionPic3.png",
    "/assets/img/about/FifthSectionPic4.png",
];

export default function Index() {
    /*  const scrollRef = useRef<HTMLDivElement>(null);
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
         const walk = (x - startX.current) * 1; // scroll speed
         scrollRef.current.scrollLeft = scrollLeft.current - walk;
     };
  */
    return (
        <section
            /*  ref={scrollRef} */
            className="max-w-7xl m-auto flex gap-4 justify-center items-center my-20 2xl:my-24
                 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing px-4"
        /*  onMouseDown={onMouseDown}
         onMouseLeave={onMouseLeave}
         onMouseUp={onMouseUp}
         onMouseMove={onMouseMove} */
        >
            {images.map((image, index) => (
                <div
                    key={index}
                    className="flex-shrink-0 rounded-3xl overflow-hidden shadow-md"
                >
                    <Image
                        className="rounded-3xl object-cover pointer-events-none"
                        src={image}
                        alt=""
                        width={index === 0 || index === 3 ? 273 : 287}
                        height={index === 0 || index === 3 ? 250 : 320}
                    />
                </div>
            ))}
        </section>
    );
}
