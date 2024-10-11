"use client";
import React from "react";
import bringingDatas from "@/data/bringingData";
import { Image } from "antd";

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
const Bringing = () => {
  const bg = "./white bg.png";
  return (
    <div
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`container mx-auto px-4 py-16`}>
        <h5
          style={{ letterSpacing: "3px" }}
          className="text-[#232c77] text-center pb-8 font-bold uppercase mainPrimary text-4xl lg:text-6xl"
        >
            {/* Events */}
          Bringing People Together
        </h5>
        <div className="dad columns-1 gap-5 sm:columns-2  md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          {bringingDatas.map((item: PortfolioData) => (
            <div key={item.id} className="mb-3">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bringing;
