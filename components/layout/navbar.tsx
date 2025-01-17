"use client";
// import { ChevronsDown, Menu } from "lucide-react";
import React from "react";
// import {  Sheet,  SheetContent,  SheetFooter,  SheetHeader,  SheetTitle,  SheetTrigger,} from "../ui/sheet";
// import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
// import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import { Logo } from "../icons/Logo";
import { BtnRefresh } from "./btn-clear";
import { siteConfig } from "@/config/site";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const featureList: FeatureProps[] = [
  {
    title: "Showcase Your Value ",
    description: "Highlight how your product solves user problems.",
  },
  {
    title: "Build Trust",
    description:
      "Leverages social proof elements to establish trust and credibility.",
  },
  {
    title: "Capture Leads",
    description:
      "Make your lead capture form visually appealing and strategically.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card border-slate-600">
      <Link href="/" className="font-bold text-lg flex items-center">
        <Logo className="rounded-lg w-9 h-9 justify-center" />        
        Отчеты
      </Link>
      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">               
                <ul className="flex flex-col gap-2">
                  {siteConfig.navItems.map(({ label, href }) => (
                    <li
                      key={label}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {label}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {href}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {siteConfig.navItems.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />
        <BtnRefresh />
        
      </div>
    </header>
  );
};
