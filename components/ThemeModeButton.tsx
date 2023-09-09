import React, { FC } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Hydrated from "./Hydrated";
import { cn } from "@/lib/utils";

interface ThemeModeButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

const ThemeModeButton: FC<ThemeModeButtonProps> = ({ className, ...props }) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Hydrated>
      <Button
        variant="link"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={cn("px-6", className)}
        {...props}
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
