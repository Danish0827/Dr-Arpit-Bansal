import React from "react";
import Paper from "@/components/Carousal/Paper";

const Features = () => {
  return (
    <section
      className="h-[60
     bg-[#232c77] flex items-center"
    >
      <div className="relative -left-48 -top-11">
        <h2 className="transform absolute -rotate-90 text-8xl font-bold uppercase text-white">
          Features
        </h2>
      </div>
      <div className="w-[93%] m-0 ml-auto">
        <Paper />
      </div>
    </section>
  );
};

export default Features;
