import About from "@/components/About/About";
import RequestAppointment from "@/components/Contact/RequestAppointment";
import GoogleFeed from "@/components/InstagramFeed/GoogleFeed";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import { Metadata } from "next";
import React from "react";
import abouts from "@/assets/images/breadcrump/1.png";
import Counter from "@/components/About/Counter";

export const metadata: Metadata = {
  title: "About | Dr Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS Is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
};

const about = () => {
  return (
    <>
      <BreadCrumb
        title={"Dr. Arpit Bansal"}
        page={"About Dr. Arpit Bansal"}
        img={abouts.src}
        version={false}
      />
      <About />
      <Counter />
      <div className="bg-white">
        <GoogleFeed />
      </div>
      <RequestAppointment />
    </>
  );
};


export default about;
