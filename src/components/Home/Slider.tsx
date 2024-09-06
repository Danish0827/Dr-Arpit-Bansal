"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import banner1 from "@/assets/images/banner-1.png";
import banner2 from "@/assets/images/banner-2.webp";


// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Define the type for Swiper instance
import type { Swiper as SwiperType } from "swiper";

const Slider: React.FC = () => {
  const slideRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  // Define refs with appropriate types
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  // Define slides data
  const slidesData = [
    {
      // title: "Welcome to Our Health Services",
      // description:
      //   "We provide top-notch healthcare services to ensure your well-being and peace of mind.",
      title: "",
      description: "",
      backgroundImage: banner1.src,
    },
    {
      // title: "Dedicated to Your Health",
      // description:
      //   "Our team of professionals is here to support your health journey.",
      title: "",
      description: "",
      backgroundImage: banner2.src,
    },
  ];

  // Event handler for autoplay time left
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

  const handleSlideChange = (swiper: any) => {
    slideRefs.current.forEach((slide, index) => {
      if (index === swiper.activeIndex && slide) {
        slide.style.animation = "none"; // Reset animation
        slide.offsetHeight; // Trigger reflow to restart animation
        slide.style.animation = ""; // Re-apply animation
      }
    });
  };

  return (
    <>
      {/* Swiper Component */}
      <Swiper
        spaceBetween={20}
        loop={true} // Enable looping
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={handleSlideChange} // Add slide change handler
        // className="h-[80vh]"
        style={{height:'auto',width:'100%'}}
      >
        {/* Map through slidesData to generate SwiperSlides */}
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
          <div
            className="relative w-full h-auto flex items-center justify-left"
            // style={{
            //   backgroundImage: ''
            //   backgroundSize: "cover", // You can change to 'contain' if needed
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            // }}
          >
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
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
