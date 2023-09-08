import { NavigationItem } from "./NavigationItem";
import { socials_items } from "@/constants/navigation";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="h-[50px] w-full flex items-center justify-between border-t border-foreground/20">
      <div className="h-full px-6 flex items-center text-sm text-foreground/70 md:border-r md:border-foreground/20">
        Find me in:
      </div>
      <div className="hidden md:flex items-center h-full">
        {socials_items
          .filter((item) => !item.cta)
          .map((item) => (
            <NavigationItem
              key={item.label}
              href={item.path}
              isActive={false}
              borderPosition="right"
            >
              <i className={`ri-${item.icon} text-[20px]`} />
            </NavigationItem>
          ))}
      </div>
      <div className="flex items-center md:hidden h-full justify-evenly">
        {socials_items.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            size="icon"
            className="h-full rounded-none"
          >
            <i className={`ri-${item.icon} text-[20px]`} />
          </Button>
        ))}
      </div>

      <div className="hidden md:block ml-auto h-full">
        {socials_items
          .filter((item) => item.cta)
          .map((item) => (
            <NavigationItem
              key={item.label}
              href={item.path}
              isActive={false}
              borderPosition="left"
            >
              <div className="flex items-center gap-2">
                <span>{item.cta}</span>
                <i className={`ri-${item.icon} text-[20px]`} />
              </div>
            </NavigationItem>
          ))}
      </div>
    </footer>
  );
}
