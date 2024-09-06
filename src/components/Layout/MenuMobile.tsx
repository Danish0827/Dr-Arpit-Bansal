import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

// Define types for props
interface MenuMobileProps {
  showCatMenu: boolean;
  setShowCatMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showContactMenu: boolean;
  setShowContactMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuMobile: React.FC<MenuMobileProps> = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  showContactMenu,
  setShowContactMenu,
}) => {
  const menuItems = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "About Dr. Arpit",
      url: "/about",
    },
    {
      id: 3,
      name: "Gallery",
      url: "/gallery",
    },
    {
      id: 4,
      name: "Our Treatments",
      url: "/treatments",
    },
    {
      id: 5,
      name: "Schedule",
      url: "/schedule",
    },
    {
      id: 6,
      name: "Patients Education",
      url: "/patients-education",
    },
  ];

  return (
    <ul className="flex flex-col lg:hidden w-full font-normal text-lg absolute top-20 h-[100vh] left-0 bg-white border-t text-black z-50">
      {menuItems.map((item) => (
        <React.Fragment key={item.id}>
          <li className="py-4 px-5 border-b">
            <Link href={item.url}>
              <span onClick={() => setMobileMenu(false)}>{item.name}</span>
            </Link>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default MenuMobile;
