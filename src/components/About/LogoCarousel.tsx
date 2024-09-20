"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logosDatas from "@/data/logoData";
import "./LogoCarousel.css";

const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5, // 5 logos on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // 3 logos on tablet
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2, // 2 logos on mobile
        },
      },
    ],
  };

  return (
    <div className={` px-4 py-10`}>
      <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-center pb-5 lg:pb-7 text-[#232c77] uppercase mainPrimary">
        BRAND COLLABORATIONS
      </h5>

      <div className="logo-carousel overflow-hidden w-full gap-4">
        <Slider {...settings}>
          {logosDatas.map((item) => (
            <div
              style={{
                boxShadow:
                  "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
              }}
              key={item.id}
              className="single-client shadow-lg rounded-lg  my-3"
            >
              <img className="p-7" src={item.image.src} alt={item.heading} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoCarousel;
