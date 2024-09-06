import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import Schedule from "@/components/Schedule/Schedule";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Schedule | Dr Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS Is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
};

const schedule = () => {
  return (
    <>
      <BreadCrumb
        title={"Schedule"}
        page={"Schedule"}
        img="https://www.fcps.edu/sites/default/files/styles/hero_desktop_1x/public/media/hero/medical-retiree.jpg?h=bb7ee3f0&itok=ONGOOHrf"
        version={false}
      />
      <Schedule />
    </>
  );
};

export default schedule;
