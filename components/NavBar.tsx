/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/route";
import {
  Facebook,
  Home,
  Instagram,
  Menu,
  MessageCircleDashed,
  Twitter,
  User2,
  X,
} from "lucide-react";
import * as motion from "framer-motion/client";
import { usePathname } from "next/navigation";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    // {
    //   name: "Contact",
    //   link: "/contact",
    // },
  ];

  const socials = [
    {
      name: "Instagram",
      link: "",
      icon: <Instagram className="w-6 h-6 text-black" />,
    },
    {
      name: "X",
      link: "",
      icon: <Twitter className="w-6 h-6 text-black" />,
    },
    {
      name: "Facebook",
      link: "",
      icon: <Facebook className="w-6 h-6 text-black" />,
    },
  ];

  return (
    <nav className="w-full flex flex-col md:flex-row">
      <main className="w-full px-4 py-3 flex flex-row bg-transparent items-center justify-between">
        {/* LOGO */}
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{
            ease: "easeInOut",
            type: "spring",
            duration: 0.5,
            damping: 30,
            stiffness: 100,
          }}
        >
          <Link href={ROUTES.home}>
            <h1
              className={`p-2 hover:scale-110 transition-all ease-in-out cursor-pointer  ${pathname === "/" ? "text-white" : "text-primary"} rounded max-w-fit bg-none  text-2xl font-crimsonBold`}
            >
              Event Studios
            </h1>
          </Link>
        </motion.div>

        {/* REGULAR MENU */}
        <div className="hidden lg:flex flex-row items-center rounded-full lg:bg-secondary/70 px-10 py-3 space-x-20">
          <div className="flex items-center space-x-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={`  text-sm font-bold ${item.link.toLocaleLowerCase() === pathname ? " text-black font-bold " : "text-slate-500"}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            {socials.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                target="_blank"
                className="cursor-pointer"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <div />

        {/* MOBILE MENU */}
        <div className="lg:hidden">
          {!isMobileMenuOpen && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:scale-110 transition-all ease-in-out cursor-pointer dark:text-black text-white rounded max-w-fit bg-none dark:bg-white text-2xl font-crimsonBold"
            >
              <Menu
                className={`${pathname === "/" ? "text-primary-foreground" : "text-primary"} w-6 h-6`}
              />
            </button>
          )}
          {isMobileMenuOpen && (
            <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex flex-col">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:scale-110 transition-all ease-in-out cursor-pointer dark:text-black text-white rounded max-w-fit bg-none dark:bg-white text-2xl font-crimsonBold self-end mt-3 mr-3"
              >
                <X className="text-primary-foreground w-6 h-6" />
              </button>
              <div className="flex flex-col items-center justify-center flex-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-white text-2xl font-bold mb-4 ${item.name === pathname ? "text-white dark:text-black" : ""}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </nav>
  );
}

export default NavBar;
