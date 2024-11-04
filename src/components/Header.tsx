// "use client";

import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

function Header({ user }: { user: unknown }) {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Login",
      path: "/sign-in",
      show: !user,
    },
    {
      label: "Register",
      path: "/sign-up",
      show: !user,
    },
    {
      label: "Jobs",
      path: "/jobs",
      show: !user,
    },
    {
      label: "Activity",
      path: "/activity",
      show: user,
    },
    {
      label: "Membership",
      path: "/membership",
      show: user,
    },
    {
      label: "Account",
      path: "/account",
      show: user,
    },
  ];

  return (
    <header className="flex h-16 w-full shrink-0 items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden">
            <MenuIcon className="size-6" />
            <span className="sr-only">Toggle Navigation Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle className="mb-4">Menu content</SheetTitle>
          <Link className="mr-6 hidden lg:flex " href={"#"}>
            <h3>JOBSCO</h3>
          </Link>
          <div className="grid ">
            {menuItems.map((menuItem) =>
              menuItem.show ? (
                <Link
                  href={menuItem.path}
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  key={menuItem.label}
                >
                  {menuItem.label}
                </Link>
              ) : null
            )}
            <UserButton afterSwitchSessionUrl="/" />
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="hidden lg:flex mr-6 ">
        JOBSCO
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        {menuItems.map((menuItem) =>
          menuItem.show ? (
            <Link
              key={menuItem.path} // Make sure each Link has a unique key
              href={menuItem.path}
              className="group inline-flex h-9 w-max items-center rounded-md bg-white px-4 py-2 text-sm font-medium"
            >
              {menuItem.label}
            </Link>
          ) : null
        )}
        <UserButton afterSwitchSessionUrl="/" />
      </nav>
    </header>
  );
}
export default Header;
