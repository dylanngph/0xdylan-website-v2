import React from "react";
import Layout from "@/components/layout/layout";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <Layout>{children}</Layout>;
};

export default RootLayout;
