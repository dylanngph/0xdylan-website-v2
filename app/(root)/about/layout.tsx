"use client";

import React, { Fragment } from "react";
import AboutSidebar from "@/components/pages/about/about-sidebar";
import styled from "@emotion/styled";

const MainSection = styled.section`
  width: calc(100% - 311px);
`;

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex">
      <AboutSidebar />
      <MainSection className="sticky top-0 left-[311px]">
        {children}
      </MainSection>
    </section>
  );
};

export default AboutLayout;
