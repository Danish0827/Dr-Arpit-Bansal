import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BreadCrumbProps {
  title: string;
  page: string;
  img: any;
  version?: boolean; // Make this optional with default as false
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  title,
  page,
  img,
  version = false, // Default value set to false
}) => {
  return (
    <div
      className={`relative bg-bottom h-auto py-16 sm:py-24 object-cover ${
        version ? "bg-gradient-to-r from-primary to-secondary" : ""
      }`}
      style={
        version
          ? undefined
          : {
              backgroundImage: `url(${img ? img : "/breadcrumbImage.webp"})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }
      }
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          version ? "bg-gradient-to-r from-primary to-secondary" : "bg-black/50"
        }`}
      ></div>

      <div className="flex flex-col items-start justify-center relative px-5 md:px-10 lg:px-16 z-10">
        <div className="flex items-center justify-between w-full">
          <div>
            <h2 className="text-2xl lg:text-5xl capitalize text-white">
              {title}
            </h2>
            <div>
              <ul className="flex items-center text-sm justify-start gap-1 pt-2">
                <Link href="/">
                  <Home size={17} className="-mt-1" color="white" />
                </Link>
                <li>
                  <Link href={"/"}>
                    <span className="text-white font-medium">Home</span>
                  </Link>
                </li>
                <ChevronRight size={19} color="white" />
                <li className="text-white">{page}</li>
              </ul>
            </div>
          </div>
          {version && (
            <div>
              <img
                src="/betlogo.png"
                className="min-w-24 max-w-24 md:min-w-48 md:max-w-48"
                alt="Logo"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
