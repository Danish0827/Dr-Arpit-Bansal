import React from "react";
import KanpurDatas from "@/data/KanpurData";
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

const Kanpur = () => {
  return (
    <>
      <p className="text-center mb-5 text-2xl">Talk on hyderation and longevity</p>
      <div className="dad columns-1 gap-5 sm:columns-2  md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        {KanpurDatas.map((item: PortfolioData) => (
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
    </>
  );
};

export default Kanpur;
