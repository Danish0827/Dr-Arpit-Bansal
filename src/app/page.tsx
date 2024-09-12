import AboutHome from "@/components/About/AboutHome";
import SpecialityComp from "@/components/About/SpecialityComp";
import Blog from "@/components/Blog/Blog";
import RequestAppointment from "@/components/Contact/RequestAppointment";
import Slider from "@/components/Home/Slider";
import GoogleFeed from "@/components/InstagramFeed/GoogleFeed";
import InstaFeed from "@/components/InstagramFeed/InstaFeed";
import FloatingAppointment from "@/components/Layout/FloatingAppointment";
import Treatments from "@/components/Treatments/Treatments";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS Is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
};

export default function Home() {
  return (
    <>
      <Slider />
      <AboutHome/>
      <SpecialityComp/>
      {/* <Treatments title="home" /> */}
      <Blog title="home" />
      <InstaFeed />
      <GoogleFeed />
      <RequestAppointment/>
      {/* <FloatingAppointment /> */}
    </>
  );
}
