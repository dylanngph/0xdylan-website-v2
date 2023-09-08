import React from "react";
import "./globals.css";
import Layout from "@/components/layout/layout";
import SessionProvider from "@/providers/session-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { IBM_Plex_Mono } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/shadcn/utils";
import { Toaster } from "react-hot-toast";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "0xdylan - Web Application Developer",
  description: "Senior Web Application Developer with Frontend expertise",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(ibmPlexMono.className, "antialiased")}>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
