"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import inNewsDatas from "@/data/inNewsData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { Image } from "antd";

// Assuming StaticImageData type is used for images
interface StaticImageData {
  src: string;
  width: number;
  height: number;
  placeholder?: string;
}

interface PortfolioData {
  id: number;
  image: StaticImageData; // Use the StaticImageData type for images
  heading: string;
  purl?: string; // Optional URL
}

export default function Paper() {
  return (
    <>
      <Swiper
        // slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 3, // Show 2 slides on mobile
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3, // Show 3 slides on tablet
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4, // Show 4 slides on desktop
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-[93%] right-0 ml-auto m-0  py-40 overflow-hidden"
        style={{
          padding: "100px 0",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        {inNewsDatas.map((item: PortfolioData) => (
          <SwiperSlide>
            {" "}
            <Image.PreviewGroup>
              <Image
                src={item.image.src} // Access the src from the image object
                alt={item.heading}
                className="rounded-lg"
                // layout="responsive"
                // width={item.image.width}
                // height={item.image.height}
              />
            </Image.PreviewGroup>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
