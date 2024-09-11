"use client";
import React, { useEffect } from "react";
import { ElfsightWidget } from "react-elfsight-widget";

const GoogleFeed = () => {
  useEffect(() => {
    const hideAnchorTags = () => {
      const anchorTags = document.querySelectorAll("a");

      // Iterate through each anchor tag
      anchorTags.forEach((anchor) => {
        // Check if the anchor tag's text content exists and matches the target text
        if (
          anchor.textContent &&
          anchor.textContent.trim() === "Free Google Reviews widget"
        ) {
          // Apply the display: none; style
          anchor.style.display = "none";
        }
      });
    };

    // Set a timeout to delay execution by 5 seconds (5000 milliseconds)
    const timeoutId = setTimeout(hideAnchorTags, 5000);

    // Clean up the timeout if the component unmounts before the timeout executes
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="p-5 md:p-10 lg:p-16">
      <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-center pb-5 lg:pb-7 text-[#232c77]">
        What our Patients say
      </h5>
      <ElfsightWidget widgetId={"f6b152b5-a1ce-4254-8ea7-f34a28e0b4e8"} />
    </div>
  );
};

export default GoogleFeed;
