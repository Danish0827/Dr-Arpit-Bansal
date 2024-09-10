'use client'
import Link from "next/link";
import React from "react";

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
  const menuItems = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About Dr. Arpit", url: "/about" },
    { id: 3, name: "Gallery", url: "/gallery" },
    { id: 4, name: "Our Treatments", url: "/treatments" },
    { id: 5, name: "Schedule", url: "/schedule" },
    { id: 6, name: "Patients Education", url: "/patients-education" },
    { id: 6, name: "Contact Us", url: "/book-appointment" },
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
