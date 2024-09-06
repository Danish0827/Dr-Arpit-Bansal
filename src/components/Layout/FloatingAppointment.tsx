"use client";
import { Modal } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import ContactForm from "../Contact/ContactForm";

const FloatingAppointment = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const SkeletonLoader = () => {
    return (
      <div className="space-y-4 p-7">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-4 bg-gray-300 rounded-md animate-pulse"
          ></div>
        ))}
      </div>
    );
  };
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <>
      <div className="hidden lg:block fixed -right-[85px] z-50 -rotate-90 px-4 pt-3 pb-1 rounded-t-xl bottom-[50%] bg-gradient-to-r from-[#171f58] to-blue-500">
        <Link onClick={showLoading} href="#">
          <h2 className="text-white">Book An Appointment</h2>
        </Link>
      </div>
      <div className="lg:hidden fixed z-50 px-4 pt-3 pb-1 rounded-t-xl bottom-0 left-5 bg-gradient-to-r from-[#171f58] to-blue-500">
        <Link onClick={showLoading} href="#">
          <h2 className="text-white">Book An Appointment</h2>
        </Link>
      </div>
      <Modal
        centered
        footer={false}
        open={open}
        onCancel={() => setOpen(false)}
      >
        {loading ? <SkeletonLoader /> : <ContactForm />}
      </Modal>
    </>
  );
};

export default FloatingAppointment;
