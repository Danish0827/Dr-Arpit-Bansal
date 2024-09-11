import React from "react";
import expertiseData from "@/data/specialityData";
import Link from "next/link";

const { expertise } = expertiseData;

const SpecialityComp = () => {
  return (
    <>
      <div
        id="service"
        className="block pt-5 expertise-logo"
        // style={{
        //   background: `url(${bgImages.src})`,
        // }}
      >
        <div className="block px-5 lg:px-20">
          <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-center pb-5 lg:pb-7 text-[#232c77]">
            Our Speciality
          </h5>
        </div>

        <div className="flex flex-wrap justify-center w-full px-2 md:px-11 lg:px-20 xl:px-32 ">
          {expertise.map(({ id, image, heading, count }) => (
            <div className="lg:w-1/3 md:w-1/2 w-full p-3" key={id}>
              <Link href={count}>
                <div className="gdfg overflow-hidden  group shadow-lg">
                  <img
                    className="hover:scale-150 scale-125 duration-100 object-cover h-60"
                    src={image}
                    alt=""
                  />
                  <h3 className="group-hover:font-bold relative md:text-lg text-xs -mt-6 w-full h-10 flex items-center justify-center  text-center pb-4 pt-4  bg-[#232c77] group-hover:bg-white group-hover:text-[#232c77] font-normal text-white">
                    {heading}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpecialityComp;
