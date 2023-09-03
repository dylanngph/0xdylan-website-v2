"use client";

import React from "react";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="min-h-screen bg-[#010C15] flex flex-col items-center justify-center p-12 relative">
      <Image
        src="/images/login-bg.png"
        alt="login-bg"
        width={400}
        height={400}
        className="absolute top-0 left-0 z-1 w-full h-full opacity-30"
      />
      {children}
    </section>
  );
};

export default AuthLayout;
