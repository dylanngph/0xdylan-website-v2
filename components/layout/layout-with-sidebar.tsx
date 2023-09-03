"use client";

import Header from "./header";
import Footer from "./footer";
import { Fragment, type ReactNode } from "react";
import styled from "@emotion/styled";
import "remixicon/fonts/remixicon.css";

const Main = styled.main`
  min-height: calc(100vh - 50px);
  padding-top: 58px;
  width: calc(100% - 311px);
  margin-left: 311px;
`;

const LayoutWithSidebar = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Fragment>
  );
};

export default LayoutWithSidebar;
