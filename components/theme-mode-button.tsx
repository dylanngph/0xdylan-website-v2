import React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const ThemeModeButton = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button variant="link" onClick={() => setTheme(isDark ? "light" : "dark")}>
      {isDark ? <i className="ri-sun-fill" /> : <i className="ri-moon-fill" />}
    </Button>
  );
};

export default ThemeModeButton;
