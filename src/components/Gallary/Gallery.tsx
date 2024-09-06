"use client";
import portfolioDatas from "@/data/portfolioData";
import { useState, useEffect } from "react";
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

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [tabColors, setTabColors] = useState({
    Home: "#ed7936",
    News: "",
    Contact: "",
    About: "",
  });

  useEffect(() => {
    setActiveTab("Home");
  }, []);

  const openPage = (pageName: string, color: string) => {
    setActiveTab(pageName);
    setTabColors({
      Home: "",
      News: "",
      Contact: "",
      About: "",
      [pageName]: color,
    });
  };

  return (
    <div className={`container mx-auto px-4 py-16`}>
      <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-center pb-5 lg:pb-7 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#171f58]">
        Dr. Arpit Bansal
      </h5>
      {/* <div className="m-auto block text-center pb-10">
        <button
          className="tablink px-2 py-2 md:px-4 md:py-3 bg-black text-white md:mr-4 mr-2 rounded-xl hover:bg-[#ed7936]"
          onClick={() => openPage("Home", "#ed7936")}
          style={{ backgroundColor: tabColors.Home }}
        >
          Commercial Offices
        </button>
        <button
          className="tablink px-2 py-2 md:px-4 md:py-3 bg-black text-white md:mr-4 mr-2 rounded-xl hover:bg-[#ed7936]"
          onClick={() => openPage("News", "#ed7936")}
          style={{ backgroundColor: tabColors.News }}
        >
          Home
        </button>
      </div> */}

      {/* <div
        id="Home"
        className="tabcontent"
        style={{ display: activeTab === "Home" ? "block" : "none" }}
      > */}
      <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        {portfolioDatas.map((item: PortfolioData) => (
          <div key={item.id}>
            {" "}
            {/* Add a wrapper div with a unique key */}
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
      {/* </div> */}

      {/* <div
        id="News"
        className="tabcontent"
        style={{ display: activeTab === "News" ? "block" : "none" }}
      >
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          {portfolioimg?.map((item) => (
            <Image
              key={item.id}
              src={item.image.src}
              alt={item.heading}
              layout="responsive"
              width={item.image.width}
              height={item.image.height}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Gallery;
