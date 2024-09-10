import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import Schedule from "@/components/Schedule/Schedule";
import { Metadata } from "next";
import React from "react";
import abouts from '@/assets/images/breadcrump/3.png'

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
        img={abouts.src}
        version={false}
      />
      <Schedule />
    </>
  );
};

export default schedule;
