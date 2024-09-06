import About from "@/components/About/About";
import RequestAppointment from "@/components/Contact/RequestAppointment";
import GoogleFeed from "@/components/InstagramFeed /GoogleFeed";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import { Metadata } from "next";
import React from "react";

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
        img="https://www.fcps.edu/sites/default/files/styles/hero_desktop_1x/public/media/hero/medical-retiree.jpg?h=bb7ee3f0&itok=ONGOOHrf"
        version={false}
      />
      <About />
      <div className="bg-white">
        <GoogleFeed />
      </div>
      <RequestAppointment />
    </>
  );
};

export default about;
