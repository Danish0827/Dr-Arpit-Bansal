"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css"; // Import your styles

import banner1 from "@/assets/images/banner-1.png";
import banner2 from "@/assets/images/banner-2.webp";

import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const Slider: React.FC = () => {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const slidesData = [
    {
      title: "",
      description: "",
      backgroundImage: banner1.src,
    },
    {
      title: "",
      description: "",
      backgroundImage: banner2.src,
    },
  ];

  const onAutoplayTimeLeft = (
    s: SwiperType,
    time: number,
    progress: number
  ) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        (1 - progress).toString()
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    slideRefs.current.forEach((slide, index) => {
      if (index === swiper.activeIndex && slide) {
        slide.classList.remove("banner-animate"); // Remove the class first
        void slide.offsetWidth; // Trigger reflow to restart animation
        slide.classList.add("banner-animate"); // Add class back for animation
      }
    });
  };

  return (
    <>
      <Swiper
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        onSlideChange={handleSlideChange}
        style={{ height: "auto", width: "100%" }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              ref={(el) => (slideRefs.current[index] = el)}
              className="relative w-full h-auto flex items-center justify-left banner-animate"
            >
              <img src={slide.backgroundImage} alt="" />
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
