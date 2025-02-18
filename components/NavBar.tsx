/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/route";
import { Heart, Menu, ShoppingBag, X } from "lucide-react";
import * as motion from "framer-motion/client";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className="w-full px-4 py-2 flex flex-row bg-white items-center justify-between lg:space-x-10">
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
          {/* <h1
            className={`p-2 hover:scale-110 transition-all ease-in-out cursor-pointer  ${pathname === "/" ? "text-black" : "text-primary"} rounded max-w-fit bg-none  text-2xl font-bold`}
          >
            ThriftStock
          </h1> */}
          <Image
            src="/images/logoblack.png"
            alt="logo"
            width={100}
            height={100}
            priority
            className="object-cover"
          />
        </Link>
      </motion.div>

      {/* REGULAR MENU */}
      <div className="hidden lg:flex lg:flex-1 items-center lg:justify-center space-x-10">
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

      <div className="hidden lg:flex items-center space-x-3  justify-end">
        <span className="relative cursor-pointer">
          <Heart className="text-xs" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            {/* Replace with actual favorite count */}3
          </span>
        </span>
        <span className="relative cursor-pointer">
          <ShoppingBag className="text-xs" />
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full px-1">
            {/* Replace with actual cart count */}5
          </span>
        </span>
      </div>
      <div />

      {/* MOBILE MENU */}
      <div className="lg:hidden">
        {!isMobileMenuOpen && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:scale-110 transition-all ease-in-out cursor-pointer text-black rounded max-w-fit bg-none text-2xl font-crimsonBold"
          >
            <Menu
              className={`${pathname === "/" ? "text-black" : "text-primary"} w-6 h-6`}
            />
          </button>
        )}
        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex flex-col">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:scale-110 transition-all ease-in-out cursor-pointer  text-white rounded max-w-fit bg-none text-2xl font-crimsonBold self-end mt-3 mr-3"
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
    </nav>
  );
}

export default NavBar;
