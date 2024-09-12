"use client";
import { Modal } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import ContactForm from "../Contact/ContactForm";

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
const SocialLink = ({ href, Icon }: { href: string; Icon: any }) => (
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

// AppointmentLinks component for rendering social links
const AppointmentLinks = ({ className }: { className: string }) => (
  <div className={className}>
    <ul className="flex items-center gap-2 pb-4">
      {socialLinks.map(({ href, icon: Icon }, index) => (
        <SocialLink key={index} href={href} Icon={Icon} />
      ))}
    </ul>
  </div>
);

// SkeletonLoader component for loading state
const SkeletonLoader = () => (
  <div className="space-y-4 p-7">
    {Array.from({ length: 16 }).map((_, index) => (
      <div
        key={index}
        className="w-full h-4 bg-gray-300 rounded-md animate-pulse"
      ></div>
    ))}
  </div>
);

// FloatingAppointment component
const FloatingAppointment = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Show loading and open modal
  const handleAppointmentClick = () => {
    setIsOpen(true);
    setIsLoading(true);

    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Large screen button */}
      <div
        className="block cursor-pointer fixed -right-[99px] z-50 -rotate-90 px-7 py-2 rounded-t-xl bottom-[63%] bg-[#232c77]"
        onClick={handleAppointmentClick}
      >
        <h2 className="text-white">Book Appointment</h2>
      </div>

      {/* Social links for large screens */}
      <AppointmentLinks className="block fixed -right-[60px] z-50 -rotate-90 px-4 pt-3 pb-1 rounded-t-xl bottom-[30%] bg-[#232c77]" />

      {/* Modal for appointment form */}
      <Modal
        centered
        footer={null}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
      >
        {isLoading ? <SkeletonLoader /> : <ContactForm />}
      </Modal>
    </>
  );
};

export default FloatingAppointment;
