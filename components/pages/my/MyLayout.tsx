import React from "react";
import SidebarLayout from "@/components/layout/SidebarLayout";
import MySidebar from "./MySidebar";

const MyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarLayout sidebarComponent={<MySidebar />}>{children}</SidebarLayout>
  );
};

export default MyLayout;
