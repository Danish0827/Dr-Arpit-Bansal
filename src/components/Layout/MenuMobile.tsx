"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

// Define types for props
interface SubMenuItem {
  id: number;
  name: string;
  url: string;
}

interface MenuMobileProps {
  showCatMenu: boolean;
  setShowCatMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showContactMenu: boolean;
  setShowContactMenu: React.Dispatch<React.SetStateAction<boolean>>;
  subMenuData: SubMenuItem[] | null; // Allow it to be an array or null
}

const MenuMobile: React.FC<MenuMobileProps> = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  showContactMenu,
  setShowContactMenu,
  subMenuData,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const menuItems = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "About Dr Arpit",
      url: "/about",
    },
    {
      id: 3,
      name: "Our Speciality",
      url: "#",
      hasDropdown: true, // Mark this item as having a dropdown
      subMenu: [
        { id: 1, name: "Cancer Surgery", url: "/speciality/cancer-surgery" },
        { id: 2, name: "Piles Surgery", url: "/speciality/piles-surgery" },
        { id: 3, name: "Hernia Surgery", url: "/speciality/hernia-surgery" },
        { id: 4, name: "Stone Surgery", url: "/speciality/stone-surgery" },
        { id: 5, name: "Laparoscopy", url: "/speciality/laparoscopy" },
      ],
    },
    {
      id: 4,
      name: "Our Treatments",
      url: "/treatments",
    },
    {
      id: 5,
      name: "Gallery",
      url: "/gallery",
    },
    {
      id: 6,
      name: "Testimonial",
      url: "/testimonial",
    },
    {
      id: 7,
      name: "Patients Education",
      url: "/patients-education",
    },
  ];

  const handleDropdownToggle = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <ul className="flex flex-col lg:hidden w-full font-normal text-lg absolute top-20 h-[100vh] left-0 bg-white border-t text-black z-50">
      {menuItems.map((item) => (
        <React.Fragment key={item.id}>
          <li className="py-4 px-5 border-b">
            {item.hasDropdown ? (
              <>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleDropdownToggle(item.id)}
                >
                  <span>{item.name}</span>
                  <span>{activeDropdown === item.id ? "-" : "+"}</span>
                </div>
                {activeDropdown === item.id && (
                  <ul className="pl-5">
                    {item.subMenu?.map((subItem) => (
                      <li key={subItem.id} className="py-2">
                        <Link
                          className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                          href={subItem.url}
                        >
                          <ArrowRight size={16} />
                          <span onClick={() => setMobileMenu(false)}>
                            {subItem.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link href={item.url}>
                <span onClick={() => setMobileMenu(false)}>{item.name}</span>
              </Link>
            )}
          </li>
        </React.Fragment>
      ))}

      {/* Render subMenuData if it's not null */}
      {subMenuData && subMenuData.length > 0 && (
        <div className="pt-2">
          <h3 className="px-5 text-md font-semibold">Sub Menu</h3>
          {subMenuData.map((subItem) => (
            <li key={subItem.id} className="py-2 px-5 border-b">
              <Link href={subItem.url}>
                <span onClick={() => setMobileMenu(false)}>{subItem.name}</span>
              </Link>
            </li>
          ))}
        </div>
      )}
    </ul>
  );
};

export default MenuMobile;
