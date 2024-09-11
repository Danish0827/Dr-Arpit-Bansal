import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

// Social links array
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

// SocialLink component
const SocialLink = ({ href, Icon }: { href: any; Icon:any }) => (
  <li className="flex items-center rotate-90">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-white hover:text-[#cdc5c5] transition-colors"
    >
      <Icon className="text-2xl" />
    </a>
  </li>
);

// Common AppointmentLinks component
const AppointmentLinks = ({ className }: { className: string }) => (
  <div className={className}>
    <ul className="flex items-center gap-2 pb-4">
      {socialLinks.map(({ href, icon: Icon }, index) => (
        <SocialLink key={index} href={href} Icon={Icon} />
      ))}
    </ul>
  </div>
);

// FloatingAppointment component
const FloatingAppointment = () => {
  return (
    <>
      {/* For large screens */}
      <AppointmentLinks className="hidden lg:block fixed -right-[60px] z-50 -rotate-90 px-4 pt-3 pb-1 rounded-t-xl bottom-[50%] bg-[#232c77]" />

      {/* For small screens */}
      <AppointmentLinks className="lg:hidden fixed z-50 px-4 pt-3 pb-1 rounded-t-xl bottom-0 left-5 bg-[#232c77]" />
    </>
  );
};

export default FloatingAppointment;
