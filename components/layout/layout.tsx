"use client";

import Header from "./header";
import Footer from "./footer";
import type { ReactNode } from "react";
import styled from "@emotion/styled";
import "remixicon/fonts/remixicon.css";

const Main = styled.main`
  min-height: calc(100vh - 50px);
  padding-top: 58px;
`;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
