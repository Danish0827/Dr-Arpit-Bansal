"use client";
import RequestAppointment from "@/components/Contact/RequestAppointment";
import Gallery from "@/components/Gallary/Gallery";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import React, { useEffect } from "react";

const testimonial = () => {
  return (
    <>
      <BreadCrumb
        title={"Gallery"}
        page={"Gallery"}
        img="https://www.fcps.edu/sites/default/files/styles/hero_desktop_1x/public/media/hero/medical-retiree.jpg?h=bb7ee3f0&itok=ONGOOHrf"
        version={false}
      />
      <Gallery />
      <RequestAppointment />
    </>
  );
};

export default testimonial;
