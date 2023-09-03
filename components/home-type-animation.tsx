"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const HomeTypeAnimation = () => {
  const isMobile = window.innerWidth <= 640;
  console.log(isMobile);
  return (
    <TypeAnimation
      sequence={[
        "> Creative Developer",
        1000, // Waits 1s
        "> Frontend Engineer",
        2000, // Waits 1s
      ]}
      wrapper="p"
      cursor={true}
      repeat={Infinity}
      style={{
        color: "#4D5BCE",
        display: "inline-block",
        fontSize: isMobile ? "24px" : "32px",
        fontWeight: "500",
      }}
    />
  );
};

export default HomeTypeAnimation;
