"use client";
import {
  Linkedin,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Announcement = () => {
  return (
    <div className="hidden md:flex h-[6svh] px-16 bg-[#232c77] items-center justify-between">
      <div className="md:hidden lg:block">
        <ul className="flex gap-5">
          <li className="flex text-white text-sm gap-2 items-center">
            <span>
              <Phone size={17} strokeWidth={2} color="white" />
            </span>
            <a
              href="tel:+919867356907"
              style={{ color: "white" }}
              className=" text-white"
            >
              +91 91234 56789
            </a>
          </li>
          <li className="flex text- gap-2 items-center">
            <span>
              <Mail size={17} strokeWidth={2} color="white" />
            </span>
            <a href="mailto:drarpit@gmail.com" className="text-white">
              drarpitbansal@gmail.com
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="xl:px-28 text-xl lg:w-40 xl:w-60 text-white overflow-hidden whitespace-nowrap">
        <div className="inline-block whitespace-nowrap animate-marquee">
          <marquee>  Esteemed Laparoscopic Surgeon, Wildlife Photographer, and Advocate for Longevity and Blue Mind Movement</marquee>
      
        </div>
      </div> */}
      <div className="md:hidden lg:block">
        <ul>
          <li className="flex text-white text-sm gap-2 items-center">
            <span>
              <MapPin size={17} strokeWidth={2} color="white" />
            </span>
            <a style={{ color: "white" }} className=" text-white">
              162 Bai Ka Bagh, Prayagraj 211003, India.
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Announcement;
