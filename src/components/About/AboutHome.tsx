"use client";
import React, { useEffect, useRef, useState } from "react";
import gallery1 from "@/assets/images/gallery/13.jpg";

const AboutHome = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 } // 10% of the section should be visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="about bg-white py-20" id="about" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-start">
          <div
            className={`relative flex justify-center items-center w-full lg:w-1/3 mb-10 duration-300 ${
              isInView ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <div className="relative lg:-ml-20 -ml-8">
              <img
                src={gallery1.src}
                alt="Profile"
                className="md:w-96 w-80 h-96 object-cover object-top border-4 border-white rounded-lg shadow-lg mr-auto relative z-20"
              />
              <div className="absolute w-80 md:w-96 h-[380px] md:h-[450px] bg-gray-300 -top-8 -right-8 rounded-lg border-b-4 border-[#171f56]"></div>
              <div className="absolute w-16 h-16 bg-[#171f56] -top-4 -right-4 rounded-lg"></div>
            </div>
          </div>

          <div
            className={`lg:pl-8 px-3 duration-300 w-full lg:w-1/2 xl:w-2/3 ${
              isInView ? "animate-fade-in-right" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold text-left mb-2 relative">
              <span className="text-[#232c77] font-bold uppercase">
                About Dr. Arpit Bansal
              </span>
              <div className="absolute top-0 right-0 w-10 h-7 bg-[#171f56] opacity-20 rotate-45"></div>
            </h2>
            <span className="text-xl mt-0 lg:mt-2 mb-2">
              MBBS, MS - General Surgery
            </span>
            <p className="text-base text-gray-800 my-4 text-justify">
              Laparoscopic Surgeon, General Surgeon, Bariatric Surgeon, Special
              Interest in Surgical Oncology 15 Years Experience Overall (10
              years as specialist)
            </p>
            <p className="text-base text-gray-800 my-4 text-justify">
              Over 14 years rich experience with in-depth knowledge, skills &
              clinical experience to perform both standard as well as advanced
              minimally invasive surgical procedures, exceptional humble
              counselling skills especially for cancer and obesity patients.
              Also had in depth knowledge regarding bariatric nutrition, cancer
              nutrition and disease preventive nutrition
            </p>
            <div className="flex gap-4">
              <a
                href="/about"
                className="flex items-center bg-[#232c77] text-white py-2 px-4 rounded-lg hover:bg-[#171f56] transition"
              >
                <i className="ri-send-plane-line mr-2"></i> Know more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
