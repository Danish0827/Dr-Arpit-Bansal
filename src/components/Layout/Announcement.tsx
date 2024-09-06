import { Linkedin, LinkedinIcon, Mail, Phone, Twitter } from "lucide-react";

import React from "react";

const Announcement = () => {
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
      <div></div>
    </div>
  );
};

export default Announcement;
