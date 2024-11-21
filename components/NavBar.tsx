/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/route";
import { Home, MessageCircleDashed, User2 } from "lucide-react";
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
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const socials = [
    {
      name: "Instagram",
      link: "",
    },
    {
      name: "X",
      link: "",
    },
    {
      name: "Facebook",
      link: "",
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

        {/* Regular menu */}
        <div className="hidden lg:flex flex-row items-center rounded-full lg:bg-secondary/70 px-2 py-3">
          <div className="flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={`  text-sm font-bold mx-4 ${item.link.toLocaleLowerCase() === pathname ? "text-black " : "text-slate-300"}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div></div>
        </div>
        <div />

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:scale-110 transition-all ease-in-out cursor-pointer dark:text-black text-white rounded max-w-fit bg-none dark:bg-white text-2xl font-crimsonBold"
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-center justify-center">
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
          )}
        </div>
      </main>
    </nav>
  );
}

export default NavBar;
