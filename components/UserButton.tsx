import { FC } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { Icons } from "./Icon";
import Link from "next/link";
import { userMenu } from "@/constants/user-menu";

interface UserButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  avatar: string | undefined;
}

const UserButton: FC<UserButtonProps> = ({
  className,
  children,
  avatar,
  ...props
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className={cn(
            "rounded-none h-full text-foreground/70 hover:text-foreground gap-3 focus-visible:ring-0 focus-visible:ring-offset-0 ",
            className
          )}
          {...props}
        >
          {children}
          <Avatar className="w-8 h-8">
            {avatar ? (
              <AvatarImage src={avatar} />
            ) : (
              <AvatarFallback>
                <Icons.user className="w-8 h-8" />
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[rgba(255,255,255,.05)] min-w-[200px]">
        {userMenu.map((item, index) => (
          <DropdownMenuItem
            asChild
            key={item.label}
            className="text-foreground/70 hover:text-foreground cursor-pointer"
          >
            <Link className="gap-2" href={`/my${item.href}`}>
              <span>{item.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}

        <DropdownMenuItem
          className="gap-2 justify-between text-foreground/70 hover:text-foreground cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          <span>Sign out</span>
          <i className="ri-logout-box-r-line" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
