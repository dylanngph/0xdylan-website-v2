import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { authTheme } from "@/configs/auth-theme";

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = authTheme();
  return <ClerkProvider appearance={theme}>{children}</ClerkProvider>;
};

export default SessionProvider;
