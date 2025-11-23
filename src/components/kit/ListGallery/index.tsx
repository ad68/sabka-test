"use client";
import { useEffect, useState } from "react";
import LightBox from "./components/LightBox";
import "./style/style.css";
import Image from "next/image";


export default function ListGallery({ slides }: any) {

  const [activeSlide, setActiveSlide] = useState(0);
  const [lightBox, setLightBox] = useState(false);

  const closeLightBox = () => {
    setLightBox(false);
    setActiveSlide(0);
  };

  useEffect(() => {
    console.log(activeSlide, "activeSlide")
  }, [activeSlide])

  return (
    <section dir="rtl" className="w-full">
      <section className=" relative w-full rounded-lg p-4">
        {lightBox && (
          <LightBox
            onClose={closeLightBox}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            slides={slides}
          />
        )}

      </section>
      <section className="grid grid-cols-1 xl:grid-cols-4 gap-2">
        {slides.slice(0, slides.length).map((item: any, index: any) => (
          <div className="" key={index}>
            <Image
              onClick={() => { setActiveSlide(index); setLightBox(true); }}
              className={`cursor-pointer rounded-md border-[2px] border-primary w-full p-1 ${index === activeSlide ? "border-red" : ""}`}
              src={item.imageUrl}
              unoptimized
              width={200}
              height={200}
              alt=""
            />
          </div>
        ))}
      </section>
    </section>
  );
}
