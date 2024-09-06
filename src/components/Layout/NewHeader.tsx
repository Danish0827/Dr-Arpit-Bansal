"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Menu from "./Menu";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import { Phone } from "lucide-react";
import logo from "@/assets/images/logo.png";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      <div className="flex items-center gap-2 font-bold">
        <Phone size={20} color="#00008b" />
        <a href="tel:022-23088552">022-23088552</a>
      </div>
      <div className="h-6 w-0.5 bg-black"></div>
      <div className="flex items-center font-bold gap-2">
        <Phone size={20} color="#00008b" />
        <a href="tel:+917400482134">74004 82134</a>
      </div>
    </div>
  );
};

const NewHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [subMenuData, setSubMenuData] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const divRef = useRef(null);

  const handleCloseDiv = (event: any) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleCloseDiv);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleCloseDiv);
    };
  }, []);

  const [headerClass, setHeaderClass] = useState(
    "sticky top-0 z-50 bg-gray-100 w-full"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderClass("fixed top-0  z-50 bg-gray-100 shadow-md w-full px-2");
      } else {
        setHeaderClass("sticky top-0 z-50 bg-gray-100 w-full");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${headerClass} w-full px-5 py-10 xl:px-12 h-[8svh] block lg:flex items-center justify-between transition-transform duration-300`}
    >
      {/* <div className="flex justify-between"> */}
      <Link href={"/"} className="hidden lg:block p-5">
        {/* <img
          src={logo.src}
          className="w-[180px] md:w-[200px]  lg:w-[160px] xl:w-[200px]"
          alt="ruby"
          onClick={() => setMobileMenu(false)}
        /> */}
        <span className="dancinglogo text-2xl md:text-3xl xl:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#171f58]">
          <strong
          //  className="dancinglogo"
          >
            Dr Arpit Bansal
          </strong>
        </span>
      </Link>

      <Menu
        showCatMenu={showCatMenu}
        setShowCatMenu={setShowCatMenu}
        showContactMenu={showContactMenu}
        setShowContactMenu={setShowContactMenu}
        subMenuData={subMenuData}
        setMobileMenu={setMobileMenu}
      />

      {mobileMenu && (
        <MenuMobile
          subMenuData={subMenuData}
          showCatMenu={showCatMenu}
          showContactMenu={showContactMenu}
          setShowCatMenu={setShowCatMenu}
          setShowContactMenu={setShowContactMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
      <div className="hidden lg:block">
        <Link href="/book-appointment">
          <button className="px-6 py-2 bg-gradient-to-r from-[#171f58] to-blue-500 text-white font-semibold rounded-full shadow-md  transition duration-300">
            Book Appointment
          </button>
        </Link>
      </div>
      {/* </div> */}
      <div className="flex items-center gap-2 justify-between w-full md:w-auto lg:hidden text-black -mt-5 md:-mt-6">
        <div className="hidden lg:flex gap-3 rounded-full justify-center md:justify-between items-center cursor-pointer relative">
          <SocialIcons />
        </div>
        <Link href={"/"} className="block ">
        <span className="dancinglogo text-2xl md:text-3xl xl:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#171f58]">
          <strong
          //  className="dancinglogo"
          >
            Dr Arpit Bansal
          </strong>
        </span>
        </Link>
        {/* Mobile Icon Start */}
        <div className="flex gap-2 items-center">
          <div className="lg:hidden">
            <Link href="/book-appointment">
              <button className="px-4 py-2 bg-gradient-to-r from-[#171f58] to-blue-500 text-white font-semibold rounded-full shadow-md  transition duration-300">
                Book Now
              </button>
            </Link>
          </div>
          <div className="w-8 lg:w-12 h-8 md:h-12 rounded-full flex lg:hidden justify-center items-center cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[20px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[30px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
