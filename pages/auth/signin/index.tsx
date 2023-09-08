import React from "react";
import AuthLayout from "@/components/layout/AuthLayout";
import AuthForm from "@/components/AuthForm";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/configs/next-auth";
import { GetServerSideProps } from "next";

const signin = () => {
  return (
    <main>
      <AuthLayout>
        <div className="card-glass p-6 rounded-md">
          <div className="flex flex-col gap-2 max-w-sm">
            <h2 className="text-xl font-semibold">Welcome mate</h2>
            <p className="text-foreground/70">
              Sign in to your account to continue
            </p>
          </div>
          <AuthForm />
        </div>
      </AuthLayout>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default signin;
