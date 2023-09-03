import SessionProvider from "@/providers/session-provider";
import "../globals.css";
import type { Metadata } from "next";
import { Fira_Code, IBM_Plex_Mono } from "next/font/google";
import AuthLayout from "@/components/layout/auth-layout";
import { ThemeProvider } from "@/providers/theme-provider";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "0xdylan - Web Application Developer",
  description: "Senior Web Application Developer with Frontend expertise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ibmPlexMono.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SessionProvider>
            <main>
              <AuthLayout>{children}</AuthLayout>
            </main>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
