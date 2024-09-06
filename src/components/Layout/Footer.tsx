"use client";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MailIcon,
  MapPin,
  MapPinned,
  Phone,
  PhoneCall,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = async () => {
  const currentYear = new Date().getFullYear();
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
    <footer className="bg-gray-100 text-gray-800 border-t pt-5">
      <div className=" px-4 pt-10 pb-5 mx-auto sm:px-6 lg:px-16 space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <span className="dancinglogo text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#171f58]">
              <strong
              //  className="dancinglogo"
              >
                Dr Arpit Bansal
              </strong>
            </span>
            <p className="mt-5 text-base font-light text-justify">
              Laparoscopic Surgeon,General Surgeon,Bariatric Surgeon, Special
              Interest in Surgical Oncology 15 Years Experience Overall (10
              years as specialist)
            </p>
            <ul className="flex justify-start pt-5 items-center gap-3">
              {links.map((link, index) => (
                <li key={index} className="flex items-center ">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    {/* <span className="ml-2">{link.name}</span> */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-5 px-3 lg:px-10 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <p className="font-bold text-xl">Specialist</p>
              <div className="w-20 h-0.5 bg-primary rounded-full"></div>
              <div className="flex flex-col mt-4 space-y-2 text-base">
                <span className="hover:text-primary">Neurologist</span>
                <span className="hover:text-primary">
                  Special Interest in Neuroimmunology, Epilepsy
                </span>

                <span className="hover:text-primary">
                  Professor & Head of Neurology
                </span>

                <span className="hover:text-primary">
                  Fellowship in Clinical Neurophysiology / EEG and Epilepsy,
                  Cleveland Clinic, USA
                </span>

                {/* <span className="hover:text-primary">Neurologist</span>

                <span className="hover:text-primary">Neurologist</span> */}
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-xl">Quick Links</p>
              <div className="w-20 h-0.5 bg-primary rounded-full"></div>
              <div className="flex flex-col mt-4 space-y-2 text-base">
                <Link
                  className=" flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                  href={"/"}
                >
                  <ArrowRight size={16} />
                  <span className="hover:text-primary">Home</span>
                </Link>
                <Link
                  className=" flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                  href={"/about"}
                >
                  <ArrowRight size={16} />
                  <span className="hover:text-primary">About Me</span>
                </Link>
                <Link
                  className=" flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                  href={"/treatments"}
                >
                  <ArrowRight size={16} />
                  <span className="hover:text-primary">Our Treatments</span>
                </Link>
                <Link
                  className=" flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                  href={"/schedule"}
                >
                  <ArrowRight size={16} />
                  <span className="hover:text-primary">Schedule</span>
                </Link>
                <Link
                  className=" flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                  href={"/patients-education"}
                >
                  <ArrowRight size={16} />
                  <span className="hover:text-primary">Patients Education</span>
                </Link>

                <Link
                  className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                  href={"/book-appointment"}
                >
                  <ArrowRight className="" size={16} />
                  <span className="hover:text-primary">Book Appointment </span>
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-xl">Contact Info</p>
              <div className="w-20 h-0.5 bg-primary rounded-full"></div>
              <div className="space-y-3 mt-4 text-sm">
                <div className="flex  items-start gap-2">
                  <div>
                    <MapPin size={20} color="#00008b" />
                  </div>
                  <h6 className="text-justify">
                    ROOM NO 23, JEEVAN JYOTI HOSPITAL CAMPUS, 162, Himmat Ganj,
                    Bai Ka Bagh, Prayagraj, Uttar Pradesh 211003
                  </h6>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall size={20} color="#00008b" />
                  <a href="tel:+919336150888">+91 93361 50888</a>
                </div>
                {/* <div className="flex items-center gap-2">
                  <PhoneCall size={20} color="#00008b" />
                  <a href="tel:+919594082134">+91 95940 82134</a>
                </div> */}

                <div className="flex items-center gap-2">
                  <MailIcon size={20} color="#00008b" />
                  <a href="mailto:ruby.e.works@gmail.com">sample@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className=" text-base text-center">
          © {currentYear} All Rights Reserved{" "}
          <a href="/" className="text-primary" target="_blank">
            Dr. Arpit Bansal
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
