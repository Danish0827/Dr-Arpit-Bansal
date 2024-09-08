import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
  subMenuData: SubMenuItem[]; // Ensure it's always an array
  contactData: ContactItem[];
  setShowContactMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showContactMenu: boolean;
}

const Menu: React.FC<MenuProps> = ({
  showCatMenu,
  setShowCatMenu,
  subMenuData = [], // Provide default empty array
  contactData = [], // Provide default empty array
  setShowContactMenu,
  showContactMenu,
}) => {
  const path = usePathname();

  const data = [
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
    <>
      <ul className="hidden lg:flex items-center gap-8 text-black">
        {data.map((item) => {
          const isActive = path === item.url;

          return (
            <React.Fragment key={item.id}>
              <li
                className={`relative cursor-pointer text-base hover:border-b-2 typetext hover:border-[#00008b] hover:text-primary hover:text-[#171f58] lg:text-xs xl:text-base transition-all ease-in-out duration-500 ${
                  isActive
                    ? " border-primary border-b-2 font-semibold border-[#00008b] text-primary text-[#171f58]"
                    : "border-transparent hover:text-primary group"
                } pb-1`}
              >
                <Link href={item.url} className="group">
                  {item.name}
                </Link>
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
