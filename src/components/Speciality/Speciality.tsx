"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Speciality = ({ title }: any) => {
  const [treatment, setTreatment] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://drarpitbck.demo-web.live/wp-json/custom/v1/getTreatmentBySlug/${title}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTreatment(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching treatment:", error);
        setLoading(false);
      });
  }, [title]);

  const decodeHtmlEntities = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  };

  if (loading) {
    // Skeleton Loader while loading
    return (
      <div className="flex flex-col lg:flex-row items-center w-full gap-3 lg:gap-10 py-5 md:py-8 lg:py-14 animate-pulse">
        <div className="w-full lg:w-[50%] px-6 md:px-16">
          <div className="w-full h-64 bg-gray-300"></div>
        </div>
        <div className="w-full lg:w-[50%] flex flex-col justify-center p-5 lg:pr-16 space-y-3 lg:space-y-5">
          <div className="w-2/3 h-8 bg-gray-300"></div>
          <div className="w-full h-24 bg-gray-200"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <head>
        <title>{treatment.meta_title || "Default Page Title"}</title>
        <meta
          name="description"
          content={
            treatment.meta_description || "Default description for the page."
          }
        />
        <meta
          name="keywords"
          content={treatment.meta_keyword || "default, keywords, here"}
        />
      </head>

      <div className="flex flex-col lg:flex-row items-start w-full gap-3 lg:gap-10 py-5 md:py-8 lg:py-14 bg-white">
        <div className="w-full lg:w-[50%] px-6 md:px-16 animate-fade-in-left">
          <img
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
            src={treatment.image}
            className="w-full object-cover border-4 border-solid border-white rounded-md"
            alt={decodeHtmlEntities(treatment.title)}
          />
        </div>
        <div className="w-full lg:w-[50%] pt-5 lg:pt-0 flex flex-col justify-center px-5 space-y-3 lg:space-y-5 lg:-ml-20 animate-fade-in-right">
          <div className="space-y-1">
            <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#232c77] uppercase">
              {decodeHtmlEntities(treatment.title)}
            </h5>
          </div>
          <div
            className="text-gray-600  mb-2"
            dangerouslySetInnerHTML={{ __html: treatment.description }}
          />
        </div>
      </div>
    </>
  );
};

export default Speciality;
