"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Hydrated from "./hydrated";

const ThemeModeButton = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Hydrated>
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
    </Hydrated>
  );
};

export default ThemeModeButton;
