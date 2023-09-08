import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";
import "remixicon/fonts/remixicon.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-50px)] pt-[58px]">{children}</main>
      <Footer />
    </>
  );
}
