import Link from "next/link";
import { header_items } from "@/constants/navigation";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { NavigationItem } from "./NavigationItem";
import ThemeModeButton from "../ThemeModeButton";
import { useSession } from "next-auth/react";

const LogoSection = () => {
  return (
    <Link href="/" passHref legacyBehavior>
      <a className="lg:w-[311px] px-6 py-4 md:border-r md:border-foreground/20 hover:underline">
        <h4>dylan-nguyen</h4>
      </a>
    </Link>
  );
};

export default function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();

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
        <div className="ml-auto hidden md:flex items-center h-full">
          <ThemeModeButton />
          {!session ? (
            <NavigationItem
              href="/auth/sign-in"
              isActive={pathname === "/sign-in"}
              borderPosition="left"
            >
              Sign in
            </NavigationItem>
          ) : (
            <NavigationItem href="#" isActive={false} borderPosition="left">
              Logged
            </NavigationItem>
          )}
        </div>
        <div className="ml-auto block md:hidden h-full">
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
