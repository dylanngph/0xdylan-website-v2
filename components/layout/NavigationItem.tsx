import clsx from "clsx";
import Link from "next/link";
import React, { FC } from "react";

interface INavigationItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  isActive: boolean;
  borderPosition?: "left" | "right";
  href: string;
}

export const NavigationItem: FC<INavigationItemProps> = ({
  isActive,
  borderPosition = "right",
  children,
  href,
  ...props
}) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a
        className={clsx({
          "h-full py-2 px-8 flex items-center justify-center border-foreground/20 relative transition-all duration-200 text-sm":
            true,
          "border-l": borderPosition === "left",
          "text-foreground": isActive,
          "text-foreground/60": !isActive,
          "border-r": borderPosition === "right",
          'before:content-[""] before:absolute before:bottom-0 before:left-0 before:h-[3px] before:bg-[#FEA55F] before:w-full':
            isActive,
          // "before:hover:content-[''] before:hover:absolute before:hover:bottom-0 before:hover:left-0 before:hover:h-[3px] before:hover:w-full before:hover:bg-[#FEA55F] text-white":
          //   true,
          "hover:text-foreground": !isActive,
        })}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};
