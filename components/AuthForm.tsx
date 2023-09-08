"use client";

import React, { useState } from "react";
import { FC, Fragment } from "react";
import { Button } from "./ui/button";
import { Icons } from "./icon";
import { cn } from "@/lib/shadcn/utils";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import clsx from "clsx";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const AuthForm: FC<AuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const errorNotify = () => toast.error("This is an error!");

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.log(error);
      errorNotify();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-2 mt-4", className)} {...props}>
      <Button
        className={clsx({
          "gap-4 card-glass hover:bg-inherit": true,
          "text-foreground": !isLoading,
          "text-foreground/70": isLoading,
        })}
        onClick={loginWithGoogle}
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Icons.google className="h-5 w-5" />
        )}
        Sign In with Google
      </Button>
      <Button
        className={clsx({
          "gap-4 card-glass hover:bg-inherit": true,
          "text-foreground": !isLoading,
          "text-foreground/70": isLoading,
        })}
      >
        Sign In with Github
      </Button>
    </div>
  );
};

export default AuthForm;
