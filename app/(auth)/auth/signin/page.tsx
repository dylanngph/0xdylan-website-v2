import AuthForm from "@/components/AuthForm";
import { Icons } from "@/components/icon";
import { Button } from "@/components/ui/button";
import React from "react";

const SignInPage = () => {
  return (
    <div className="card-glass p-6 rounded-md">
      <div className="flex flex-col gap-2 max-w-sm">
        <h2 className="text-xl font-semibold">Welcome mate</h2>
        <p className="text-foreground/70">
          Sign in to your account to continue
        </p>
      </div>
      <AuthForm />
    </div>
  );
};

export default SignInPage;
