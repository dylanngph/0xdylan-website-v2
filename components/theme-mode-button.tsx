"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import ClientOnly from "./client-only";

const ThemeModeButton = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ClientOnly>
      <Button
        variant="link"
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {isDark ? (
          <i className="ri-sun-fill" />
        ) : (
          <i className="ri-moon-fill" />
        )}
      </Button>
    </ClientOnly>
  );
};

export default ThemeModeButton;
