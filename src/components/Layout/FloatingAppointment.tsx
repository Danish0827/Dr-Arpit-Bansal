"use client";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.instagram.com/drarpitbansal.surgeon/",
    icon: FaInstagram,
  },
  {
    href: "https://www.youtube.com/@DRARPITBANSAL",
    icon: FaYoutube,
  },
  {
    href: "https://www.linkedin.com/in/dr-arpit-bansal-0b39891b/",
    icon: FaLinkedin,
  },
  {
    href: "https://www.facebook.com/drarpitbansal/",
    icon: FaFacebook,
  },
];

const SocialLink = ({ href, Icon }) => (
  <li className="flex items-center rotate-90">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-white hover:text-[#cdc5c5] transition-colors"
    >
      <span className="text-2xl">
        <Icon />
      </span>
    </a>
  </li>
);

const FloatingAppointment = () => {
  return (
    <>
      <div className="hidden lg:block fixed -right-[50px] z-50 -rotate-90 px-4 pt-3 pb-1 rounded-t-xl bottom-[50%] bg-gradient-to-r from-[#171f58] to-blue-500">
        <Link href="#">
          <h2 className="text-white">
            <ul className="flex items-center gap-2">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} href={link.href} Icon={link.icon} />
              ))}
            </ul>
          </h2>
        </Link>
      </div>
      <div className="lg:hidden fixed z-50 px-4 pt-3 pb-1 rounded-t-xl bottom-0 left-5 bg-gradient-to-r from-[#171f58] to-blue-500">
        <Link href="#">
          <h2 className="text-white">
            <ul className="block">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} href={link.href} Icon={link.icon} />
              ))}
            </ul>
          </h2>
        </Link>
      </div>
    </>
  );
};

export default FloatingAppointment;
