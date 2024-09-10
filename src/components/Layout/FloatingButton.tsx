"use client";
import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import { CgMail } from "react-icons/cg";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MdCall } from "react-icons/md";

const FloatingButton = () => {
  const path = usePathname();
  if (
    path === "/auth/login" ||
    path.startsWith("/my-course") ||
    path === "/auth/register"
  ) {
    return null;
  }
  return (
    <div className="group z-50 drop-shadow-xl fixed bottom-3 right-3 p-2  flex items-end justify-end w-24 h-24 ">
      <div className="text-white shadow-xl flex items-center cursor-pointer justify-center p-3 rounded-full bg-gradient-to-r from-[#171f58] to-blue-500 z-50 absolute  ">
        <MessageCircle color="white" size={25} />
      </div>
      <a
        target="_blank"
        href={"https://www.instagram.com/drarpitbansal.surgeon/"}
        className="absolute rounded-full transition-all cursor-pointer duration-[0.2s] ease-out bg-white shadow-xl scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 flex p-2.5 hover:p-3 bg-dark scale-100 hover:bg-[#171f58] text-[#171f58] hover:text-white"
      >
        <FaInstagram className="text-2xl" />
      </a>
      <a
        target="_blank"
        href={"https://www.facebook.com/drarpitbansal/"}
        className="absolute rounded-full transition-all cursor-pointer duration-[0.2s] bg-white shadow-xl ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2.5 hover:p-3 bg-dark hover:bg-[#171f58]  text-[#171f58] hover:text-white"
      >
        <FaFacebookF className="text-2xl" />
      </a>
      <a
        target="_blank"
        href={"https://www.youtube.com/@DRARPITBANSAL"}
        className="absolute rounded-full transition-all cursor-pointer duration-[0.2s] bg-white shadow-xl ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14 flex  p-2.5 hover:p-3 bg-dark hover:bg-[#171f58] text-[#171f58] hover:text-white"
      >
        <FaYoutube className="text-2xl" />
      </a>
    </div>
  );
};

export default FloatingButton;
