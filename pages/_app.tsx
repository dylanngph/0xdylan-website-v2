import { ThemeProvider } from "@/providers/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { IBM_Plex_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import RootLayout from "@/components/layout/RootLayout";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.className = `${cn(ibmPlexMono.className, "antialiased")}`;
  });

  const pathname = usePathname();

  const renderComponent = () => {
    if (pathname === "/auth/signin") return <Component {...pageProps} />;
    return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    );
  };

  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider
        storageKey="theme-mode"
        attribute="class"
        defaultTheme="dark"
        enableSystem
      >
        {renderComponent()}
      </ThemeProvider>
    </SessionProvider>
  );
}
