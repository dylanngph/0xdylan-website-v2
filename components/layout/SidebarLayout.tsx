import React from "react";

const SidebarLayout = ({
  children,
  sidebarComponent,
}: {
  children: React.ReactNode;
  sidebarComponent: React.ReactNode;
}) => {
  return (
    <div className="flex w-full h-full">
      <section className="sticky top-0 left-0 z-30 w-[311px] border-r overflow-y-auto h-[calc(100vh-58px)]">
        {sidebarComponent}
      </section>
      {children}
    </div>
  );
};

export default SidebarLayout;
