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

  return (
    <footer className="bg-gray-100 text-gray-800 border-t pt-5">
      <div className=" px-4 pt-10 pb-5 mx-auto sm:px-6 lg:px-16 space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <span className="dancinglogo text-4xl pr-3 font-black text-[#232c77]">
              <strong className="dancinglogo">Dr. Arpit Bansal</strong>
            </span>
            <p className="mt-5 text-base font-medium text-justify">
              Dr Arpit Bansal, an Advanced Laparoscopy and Cancer Surgeon, has
              mastered an art, which many struggle to understand. A man of
              varied interests, he has created a fine balance between his
              profession and passion. According to Dr Arpit Bansal, with time
              management and focus, one can excel in both fields. His journey
              stands testament to his extraordinary talent and unyielding
              determination.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 px-3 lg:px-10 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <p className="font-bold text-xl">Our Speciality</p>
              <div className="w-20 h-0.5 bg-primary rounded-full"></div>
              <div className="flex flex-col mt-4 space-y-3 text-base">
                <Link
                  className=" flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                  href={"/speciality/cancer-surgery"}
                >
                  <ArrowRight size={16} />
                  <span className="hover:text-primary">Cancer Surgery</span>
                </Link>
                <Link
                  className=" flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                  href={"/speciality/piles-surgery"}
                >
                  <ArrowRight size={16} />
                  <span className="hover:text-primary">piles-surgery</span>
                </Link>
                <Link
                  className=" flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                  href={"/speciality/hernia-surgery"}
                >
                  <ArrowRight size={16} />
                  <span className="hover:text-primary">Hernia Surgery</span>
                </Link>
                <Link
                  className=" flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                  href={"/speciality/stone-surgery"}
                >
                  <ArrowRight size={16} />
                  <span className="hover:text-primary">Stone Surgery</span>
                </Link>
                <Link
                  className=" flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                  href={"/speciality/laparoscopy"}
                >
                  <ArrowRight size={16} />
                  <span className="hover:text-primary">Laparoscopy</span>
                </Link>

                {/* <Link
                  className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                  href={"/book-appointment"}
                >
                  <ArrowRight className="" size={16} />
                  <span className="hover:text-primary">Book Appointment </span>
                </Link> */}
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
                  Jeevan Jyoti Hospital, 162 Bai Ka Bagh, Prayagraj 211003, India. 
                  </h6>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall size={20} color="#00008b" />
                  <a href="tel:+918141402111">+91 81414 02111</a>
                </div>
                {/* <div className="flex items-center gap-2">
                  <PhoneCall size={20} color="#00008b" />
                  <a href="tel:+919594082134">+91 95940 82134</a>
                </div> */}

                <div className="flex items-center gap-2">
                  <MailIcon size={20} color="#00008b" />
                  <a href="mailto:drarpitbansal@gmail.com ">drarpitbansal@gmail.com </a>
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
