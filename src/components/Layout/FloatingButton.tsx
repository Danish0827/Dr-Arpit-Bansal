"use client";
import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
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
        href={
          "https://wa.me/+919336150888?text=Hello"
        }
        className="absolute rounded-full transition-all cursor-pointer duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 flex p-2.5 hover:p-3 bg-dark scale-100 hover:bg-[#171f58] text-[#171f58] hover:text-white"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
      <a
        target="_blank"
        href={"tel:93361 50888"}
        className="absolute rounded-full transition-all cursor-pointer duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2.5 hover:p-3 bg-dark hover:bg-[#171f58]  text-[#171f58] hover:text-white"
      >
        <MdCall className="text-2xl" />
      </a>
      <a
        target="_blank"
        href={"mailto:s.danish0827@gmail.com"}
        className="absolute rounded-full transition-all cursor-pointer duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14 flex  p-2.5 hover:p-3 bg-dark hover:bg-[#171f58] text-[#171f58] hover:text-white"
      >
        <CgMail className="text-2xl" />
      </a>
    </div>
  );
};

export default FloatingButton;