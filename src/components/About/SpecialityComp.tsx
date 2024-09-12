"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

// Define the types for the treatment data
interface Treatment {
  id: number;
  image: string;
  title: string;
  description: string;
  slug: string;
}

const SpecialityComp: React.FC = () => {
  const [treatments, setTreatments] = useState<Treatment[]>([]); // Initialize as an array of Treatment objects

  // Fetch the data from the API
  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const response = await fetch(
          "https://drarpitbck.demo-web.live/wp-json/custom/v1/getAllTreatments?per_page=1000"
        );
        const data = await response.json();

        // Make sure to extract the treatments array from the data
        if (data?.treatments && Array.isArray(data.treatments)) {
          setTreatments(data.treatments);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching treatments:", error);
      }
    };

    fetchTreatments();
  }, []);

  return (
    <>
      <div id="service" className="block py-5 expertise-logo">
        <div className="block px-5 lg:px-20">
          <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-center pb-5 lg:pb-7 text-[#232c77]">
            Our Speciality
          </h5>
        </div>

        <div className="flex flex-wrap justify-center w-full px-2 md:px-11 lg:px-20 xl:px-5 ">
          {treatments.length > 0 ? (
            treatments.map((item) => (
              <div
                key={item.id} // Add key to the parent element
                className="xl:w-1/4 lg:w-1/3 sm:w-1/2 w-full p-3"
              >
                <Link href={`/speciality/${item.slug}`}>
                  <div className="gdfg overflow-hidden group shadow-lg">
                    <img
                      className="hover:scale-150 scale-125 duration-100 object-cover sm:h-60"
                      src={item.image}
                      alt={item.title}
                    />
                    <h3 className="group-hover:font-bold relative md:text-lg text-xs -mt-6 w-full h-10 flex items-center justify-center text-center pb-4 pt-4 bg-[#232c77] group-hover:bg-white group-hover:text-[#232c77] font-normal text-white">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No treatments available.</p> // Show a message if no treatments are available
          )}
        </div>
      </div>
    </>
  );
};

export default SpecialityComp;
