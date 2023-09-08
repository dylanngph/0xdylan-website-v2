import React from "react";
import AuthLayout from "@/components/layout/auth-layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <AuthLayout>{children}</AuthLayout>
    </main>
  );
}
