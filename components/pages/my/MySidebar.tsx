import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { userMenu } from "@/constants/user-menu";

const MySidebar = () => {
  return (
    <div className="w-full">
      <div className="">
        <div className="border-b py-4 px-6">
          <h4>My Account</h4>
        </div>
        <div className="flex flex-col py-4 px-6">
          {userMenu.map((item, index) => {
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "justify-start gap-4 text-foreground/70 hover:text-foreground p-0 w-fit"
                )}
              >
                {item.icon && <i className={cn(item.icon, "text-lg")} />}
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
      {/*  */}
      <div className="border-t">
        <div className="border-b py-4 px-6">
          <h4>Settings</h4>
        </div>
        <div className="flex flex-col py-4 px-6">
          {userMenu.map((item, index) => {
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "justify-start gap-4 text-foreground/70 hover:text-foreground p-0 w-fit"
                )}
              >
                {item.icon && <i className={cn(item.icon, "text-lg")} />}
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MySidebar;
