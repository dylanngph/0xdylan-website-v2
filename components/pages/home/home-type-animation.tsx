import Hydrated from "@/components/Hydrated";
import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { useMediaQuery } from "usehooks-ts";

const HomeTypeAnimation = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Hydrated>
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
    </Hydrated>
  );
};

export default HomeTypeAnimation;
