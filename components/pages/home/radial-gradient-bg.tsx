import React from "react";
import styled from "@emotion/styled";

const BlueRadial = styled.div`
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(77, 91, 206, 0.6) 0%,
    rgba(77, 91, 206, 0) 100%
  );
  backdrop-filter: blur(30px);
  opacity: 0.3;
`;
const GreenRadial = styled.div`
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(67, 217, 173, 0.6) 0%,
    rgba(67, 217, 173, 0) 100%
  );
  backdrop-filter: blur(30px);
  opacity: 0.3;
`;

const RadialGradientBg = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <BlueRadial className="w-full lg:w-[500px] h-[400px] rounded-full absolute z-[-1] top-[-200px] left-[-100px]" />
      <GreenRadial className="w-full lg:w-[500px] h-[400px] rounded-full absolute z-[-2] top-[150px] left-0 lg:left-[150px]" />
    </div>
  );
};

export default RadialGradientBg;
