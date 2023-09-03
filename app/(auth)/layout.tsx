import SessionProvider from "@/providers/session-provider";
import "../globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import AuthLayout from "@/components/layout/auth-layout";
import { ThemeProvider } from "@/providers/theme-provider";

const firaCode = Fira_Code({ subsets: ["latin"] });

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
      <body className={firaCode.className}>
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
