import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Autoplay } from "swiper/modules";
import Close from "../icons/close.svg";
import Download from "../icons/download.svg";
import Play from "../icons/play.svg";
import Pause from "../icons/pause.svg";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/zoom";
import "swiper/css/navigation";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  slides,
  setActiveSlide,
  activeSlide,
  onClose,
}: any) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  const swiperRef = useRef<any>(null);
  const swiperRefBig = useRef<any>(null);
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [activeSrc, setActiveSrc] = useState("");
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const goToSlide = (index: any) => {
    setActiveSlide(index);
    setActiveSrc(slides[index].imageUrl);
    if (swiperRef.current && swiperRef?.current?.slideTo) {
      swiperRef?.current?.slideTo(index);
    }
    if (swiperRefBig.current) {
      swiperRefBig?.current?.slideTo(index);
    }
  };
  const toggleAutoplay = () => {
    if (swiperRefBig.current) {
      if (isAutoPlay) {
        swiperRefBig.current.autoplay.stop();
      } else {
        swiperRefBig.current.autoplay.start();
      }
      setIsAutoPlay(!isAutoPlay);
    }
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    goToSlide(activeSlide);

  }, [activeSlide]);
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="fixed left-0 top-0 z-[1000] h-full w-full bg-black p-1">

      <section
        dir="rtl"
        className="absolute right-0 top-0 flex h-[30px] w-auto items-center gap-4 rounded-bl-full bg-[#1e1e1e] p-2 pl-6 z-50"
      >
        <Image
          src={Close}
          onClick={onClose}
          unoptimized
          alt=""
          className="w-[20px] cursor-pointer"
        />
        <Image
          onClick={() => window.open(activeSrc)}
          src={Download}
          unoptimized
          alt=""
          className="w-[20px] cursor-pointer"
        />
        <Image
          onClick={toggleAutoplay}
          unoptimized
          src={isAutoPlay ? Pause : Play}
          alt=""
          className="w-[20px] cursor-pointer"
        />
      </section>
      <section
        dir="rtl"
        className="mt-10 flex h-[75%] items-center justify-center"
      >
        <section className="w-full">

          <Swiper
            onSwiper={(swiper: any) => {
              swiperRefBig.current = swiper;
            }}
            modules={[Zoom, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={
              isAutoPlay
                ? {
                  delay: 3000,
                  disableOnInteraction: false,
                }
                : false
            }
            zoom={true}
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={(e: any) => goToSlide(e.activeIndex)}
          >
            <div className="text-white text-center font-bold text-lg mt-5">{`${activeSlide + 1} از ${slides.length}`}</div>
            {slides.map((item: any, index: any) => (
              <SwiperSlide key={index}>
                <section className="swiper-zoom-container">
                  <Image
                    onClick={() => goToSlide(index)}
                    unoptimized
                    key={index}
                    src={item.imageUrl}
                    width={600}
                    height={150}
                    className="swSlide"
                    alt=""
                  />
                </section>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>
      <section
        dir="rtl"
        className="h-auto] absolute bottom-[20px] left-0 w-full px-10"
      >
        <Swiper
          onSwiper={(swiper: any) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              // width: 576,
              slidesPerView: 4,
            },
            768: {
              // width: 768,
              slidesPerView: 6,
            },
            1024: {
              // width: 768,
              slidesPerView: 10,
            },
          }}
          spaceBetween={10}
          slidesPerView={8}
          onSlideChange={() => console.log("slide change")}
        >
          {slides.map((item: any, index: any) => (
            <SwiperSlide key={index}>
              <Image
                onClick={() => goToSlide(index)}
                key={index}
                src={item.imageUrl}
                unoptimized
                width={130}
                height={130}
                className={`cursor-pointer ${index === activeSlide ? "opacity-1" : "opacity-50"} rounded-sm`}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}
