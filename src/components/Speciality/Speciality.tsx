import Link from "next/link";
import React from "react";
import about from "@/assets/images/dr-arpit-image.jpg";

const Speciality = ({ title }: any) => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-3 lg:gap-10 py-5 md:py-8 lg:py-14">
      <div className="w-full lg:w-[50%] px-6 md:px-16">
        <img
          style={{
            boxShadow:
              "rgba(35, 44, 119, 0.4) 5px 5px,rgba(35, 44, 119, 0.3) 10px 10px,rgba(35, 44, 119, 0.2) 15px 15px,rgba(35, 44, 119, 0.1) 20px 20px,rgba(35, 44, 119, 0.05) 25px 25px",
          }}
          src="https://img.freepik.com/premium-photo/medical-team-discussed-surgical-options-with-patient-before-proceeding-with_1074916-1664.jpg?w=900"
          className="w-full object-cover"
          alt="acharya shiv"
        />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col  justify-center p-5 lg:pr-16 space-y-3 lg:space-y-5">
        <div className="space-y-1">
          {/* <h3 className="text-primary">About</h3> */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-dark capitalize">
            {title}
          </h2>
        </div>
        <p className="text-[0.9rem] tracking-wider text-justify text-dark leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          perferendis ea, voluptates deserunt commodi ex fugiat nesciunt,
          dignissimos quis maxime ipsa incidunt, odit quam corporis eveniet in!
          Possimus, ut pariatur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestiae placeat in aspernatur nobis, itaque
          debitis iure obcaecati incidunt maiores eum blanditiis qui impedit at
          deleniti, eveniet optio nihil consequatur necessitatibus! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Consectetur in
          repellendus temporibus perspiciatis dolores ea, sapiente nemo, a magni
          minima inventore architecto distinctio error, quos odio asperiores
          neque dolorem nobis?
        </p>
        {/* <div>
          <Link href={"/about"}>
            <button className="bg-gradient-to-r flex items-center gap-1.5 from-[#38754D] to-secondary hover:from-secondary hover:to-primary text-white tracking-wider text-[1rem] py-3 px-6 rounded-full shadow-lg transform hover:scale-95 transition duration-300 ease-in-out">
              Know more
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Speciality;
