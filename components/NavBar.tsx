/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/route";
import { Heart, Menu, ShoppingBag, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { AnimatePresence, motion } from "framer-motion";

const announcements = [
  "New drop on friday the 13th! Dont miss it. ThriftStock ™",
  "Ghana month sales 40% off!! ThriftStock ™",
];

function NavBar() {
  const pathname = usePathname();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (announcements.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % announcements.length);
      }, 3000);

      return () => clearInterval(timer);
    }
  }, []);

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
      name: "Customer Care",
      link: "/customer-care",
    },
  ];

  return (
    <main className="w-full flex-col">
      {/* ADS BANNER */}
      {announcements.length > 0 && (
        <div className="w-full bg-black flex items-center justify-center py-2 overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={currentIndex}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="block text-xs text-slate-200 font-bold"
            >
              {announcements[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      )}

      {/* NAVIGATION */}
      <nav className="w-full px-4 py-3 flex flex-row bg-white items-center justify-between lg:space-x-10">
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
              width={150}
              height={150}
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
        <div className="lg:hidden z-40">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 hover:scale-110 transition-all ease-in-out cursor-pointer">
                <Menu
                  className={`${pathname === "/" ? "text-primary-foreground" : "text-primary"} w-6 h-6`}
                />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex flex-col w-[300px] bg-slate-500 sm:w-[400px] p-0 border-l border-primary-foreground/20"
            >
              <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 border border-primary-foreground/50 p-2 focus:outline-none">
                <X className="h-4 w-4 text-primary-foreground" />
              </SheetClose>

              <div className="flex-1 flex flex-col justify-center px-8 min-h-0">
                <div className="space-y-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className={`block text-primary-foreground text-3xl font-bold hover:scale-110 transition-all ${item.link.toLocaleLowerCase() === pathname ? "text-white" : "text-primary-foreground/80"}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-auto w-full p-6 border-t border-primary-foreground/20">
                <span className="block text-xs text-primary-foreground/70 text-center">
                  &copy; 2025 Eventstudiosgh. All rights reserved
                </span>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </main>
  );
}

export default NavBar;
