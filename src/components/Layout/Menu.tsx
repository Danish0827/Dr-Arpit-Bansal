"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

// Define types for props
interface SubMenuItem {
  slug: string;
  name: string;
}

interface ContactItem {
  name: string;
}

interface MenuProps {
  showCatMenu: boolean;
  setShowCatMenu: React.Dispatch<React.SetStateAction<boolean>>;
  subMenuData: SubMenuItem[];
  contactData: ContactItem[];
  setShowContactMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showContactMenu: boolean;
}

const Menu: React.FC<MenuProps> = ({
  showCatMenu,
  setShowCatMenu,
  subMenuData = [],
  contactData = [],
  setShowContactMenu,
  showContactMenu,
}) => {
  const path = usePathname();

  const [showSpecialityMenu, setShowSpecialityMenu] = useState(false); // State for dropdown

  const data = [
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

  return (
    <>
      <ul className="hidden lg:flex items-center gap-8 text-black">
        {data.map((item) => {
          const isActive =
            (item.hasDropdown && path.startsWith("/speciality")) || // Check if the current path is under '/speciality'
            path === item.url;

          return (
            <React.Fragment key={item.id}>
              <li
                className={`relative cursor-pointer text-base hover:border-b-2 typetext hover:border-[#00008b] hover:text-primary hover:text-[#171f58] lg:text-xs xl:text-base transition-all ease-in-out duration-500 ${
                  isActive
                    ? " border-primary border-b-2 font-semibold border-[#00008b] text-primary text-[#171f58]"
                    : "border-transparent hover:text-primary group"
                } pb-1`}
                onMouseEnter={() =>
                  item.hasDropdown && setShowSpecialityMenu(true)
                }
                onMouseLeave={() =>
                  item.hasDropdown && setShowSpecialityMenu(false)
                }
              >
                <Link href={item.url} className="group">
                  {item.name}
                </Link>

                {/* Dropdown for 'Our Speciality' */}
                {item.hasDropdown && showSpecialityMenu && (
                  <ul className="absolute left-0 top-full mt-1 pt-3 bg-white shadow-lg rounded-md w-60">
                    {item.subMenu?.map((subItem) => (
                      <li
                        key={subItem.id}
                        className="px-4 py-2 hover:pl-5 duration-300 hover:bg-gray-100"
                      >
                        <Link
                          className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                          href={subItem.url}
                        >
                          <ArrowRight size={16} />
                          <span className="hover:text-primary">
                            {subItem.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                <span
                  className={`absolute bottom-0 left-1/2 h-[2px] bg-primary transition-all ease-in-out duration-500 transform ${
                    isActive
                      ? "w-full -translate-x-1/2"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};
export default Menu;
