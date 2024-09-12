'use client'
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
          content={treatment.meta_description || "Default description for the page."}
        />
        <meta
          name="keywords"
          content={treatment.meta_keyword || "default, keywords, here"}
        />
      </head>

      <div className="flex flex-col lg:flex-row items-center w-full gap-3 lg:gap-10 py-5 md:py-8 lg:py-14">
        <div className="w-full lg:w-[50%] px-6 md:px-16">
          <img
            style={{
              boxShadow:
                "rgba(35, 44, 119, 0.4) 5px 5px,rgba(35, 44, 119, 0.3) 10px 10px,rgba(35, 44, 119, 0.2) 15px 15px,rgba(35, 44, 119, 0.1) 20px 20px,rgba(35, 44, 119, 0.05) 25px 25px",
            }}
            src={treatment.image}
            className="w-full object-cover"
            alt={decodeHtmlEntities(treatment.title)}
          />
        </div>
        <div className="w-full lg:w-[50%] flex flex-col justify-center p-5 lg:pr-16 space-y-3 lg:space-y-5">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-dark capitalize">
              {decodeHtmlEntities(treatment.title)}
            </h2>
          </div>
          <div
            className="text-gray-600 mb-2"
            dangerouslySetInnerHTML={{ __html: treatment.description }}
          />
        </div>
      </div>
    </>
  );
};

export default Speciality;
