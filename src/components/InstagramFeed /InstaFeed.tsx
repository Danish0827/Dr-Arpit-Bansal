"use client";
import React, { useEffect } from "react";
import { ElfsightWidget } from "react-elfsight-widget";

const InstaFeed = () => {
  useEffect(() => {
    const hideAnchorTags = () => {
      const anchorTags = document.querySelectorAll("a");

      // Iterate through each anchor tag
      anchorTags.forEach((anchor) => {
        // Check if the anchor tag's text content exists and matches the target text
        if (anchor.textContent && anchor.textContent.trim() === "Free Instagram Feed widget") {
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
      <ElfsightWidget widgetId={"322cf0f5-d835-46a3-9fc2-f0cfbe53b3ff"} />
    </div>
  );
};

export default InstaFeed;
