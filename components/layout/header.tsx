import Link from "next/link";
import { header_items } from "@/constants/navigation";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "../ui/button";
import { NavigationItem } from "./NavigationItem";
import ThemeModeButton from "../ThemeModeButton";
import { useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/configs/next-auth";
import { cn } from "@/lib/utils";
import UserButton from "../UserButton";
import { Skeleton } from "../ui/skeleton";

const LogoSection = () => {
  return (
    <Link href="/" passHref legacyBehavior>
      <a className="lg:w-[311px] px-6 py-4 md:border-r md:border-foreground/20 hover:underline">
        <h4 className="text-xl">DylanPacks</h4>
      </a>
    </Link>
  );
};

export default function Header() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  return (
    <header>
      <nav className="fixed top-0 left-0 z-50 bg-background border-b border-foreground/20 flex items-center h-[58px] w-full">
        <LogoSection />
        <div className="hidden lg:flex items-center h-full">
          {header_items.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <NavigationItem key={index} href={item.path} isActive={isActive}>
                {item.label}
              </NavigationItem>
            );
          })}
        </div>
        <div className="ml-auto hidden lg:flex items-center h-full">
          {status === "unauthenticated" ? (
            <Link
              href="/auth/signin"
              className={cn(
                buttonVariants({ variant: "link" }),
                "border-r rounded-none h-full"
              )}
            >
              Sign in
            </Link>
          ) : status === "authenticated" ? (
            <UserButton
              className="border-r"
              avatar={session.user?.image ?? undefined}
            >
              {session.user?.name || session.user?.email || "Unknown User"}
            </UserButton>
          ) : (
            <Skeleton className="w-32 h-8" />
          )}
          <ThemeModeButton className="h-full rounded-none" />
        </div>
        <div className="ml-auto block lg:hidden h-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-full rounded-none px-8"
          >
            <i className="ri-menu-fill text-lg" />
          </Button>
        </div>
      </nav>
    </header>
  );
}

export const getServersideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log(session);
  return {
    props: {
      session,
    },
  };
};
