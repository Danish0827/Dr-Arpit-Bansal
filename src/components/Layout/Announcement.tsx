'use client'
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
  const links = [
    {
      href: "https://www.instagram.com/drarpitbansal.surgeon/",
      icon: <FaInstagram />,
      name: "Instagram",
    },
    // {
    //   href: "https://www.facebook.com/drarpit/",
    //   icon: <FaFacebook />,
    //   name: "Facebook",
    // },
    {
      href: "https://www.youtube.com/@DRARPITBANSAL",
      icon: <FaYoutube />,
      name: "YouTube",
    },
    {
      href: "https://www.linkedin.com/in/dr-arpit-bansal-0b39891b/",
      icon: <FaLinkedin />,
      name: "LinkedIn",
    },
    // {
    //   href: "https://www.instagram.com/drarpitbansal/",
    //   icon: <FaInstagram />,
    //   name: "Instagram",
    // },
    {
      href: "https://www.facebook.com/drarpitbansal/",
      icon: <FaFacebook />,
      name: "Facebook",
    },
  ];
  return (
    <div className="hidden md:flex h-[6svh] px-16 bg-gradient-to-r to-[#171f58] from-blue-500 items-center justify-between">
      <div>
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
      <div>
        <ul>
          <li className="flex text-white text-sm gap-2 items-center">
            <span>
              <MapPin size={17} strokeWidth={2} color="white" />
            </span>
            <a style={{ color: "white" }} className=" text-white">
              ROOM NO 23, JEEVAN JYOTI HOSPITAL CAMPUS, 162, Himmat Ganj, Bai Ka
              Bagh, Prayagraj, Uttar Pradesh 211003
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Announcement;
