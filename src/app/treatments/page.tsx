import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import Treatments from "@/components/Treatments/Treatments";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Treatments | Dr Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS Is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
};

const treatments = () => {
  return (
    <>
      <BreadCrumb
        title={"Our Treatments"}
        page={"Our Treatments"}
        img="https://www.fcps.edu/sites/default/files/styles/hero_desktop_1x/public/media/hero/medical-retiree.jpg?h=bb7ee3f0&itok=ONGOOHrf"
        version={false}
      />
      <Treatments title="treatment" />
    </>
  );
};

export default treatments;
