"use client";
import React, { useEffect } from "react";
import { ElfsightWidget } from "react-elfsight-widget";

const InstaFeed: React.FC = () => {
  useEffect(() => {
    const hideAnchorTags = () => {
      // Query all anchor tags in the DOM
      const anchorTags = document.querySelectorAll<HTMLAnchorElement>("a");

      // Iterate through each anchor tag
      anchorTags.forEach((anchor) => {
        // Check if textContent is not null and contains specific keywords
        if (
          anchor.href.includes("elfsight.com") || 
          (anchor.textContent && anchor.textContent.includes("Widget is deactivated"))
        ) {
          // Hide the anchor tag by setting display: none;
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
      <ElfsightWidget widgetId="322cf0f5-d835-46a3-9fc2-f0cfbe53b3ff" />
    </div>
  );
};

export default InstaFeed;
