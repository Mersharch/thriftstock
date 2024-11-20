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

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <User2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <MessageCircleDashed className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
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
            <h1 className="p-2 hover:scale-110 transition-all ease-in-out cursor-pointer dark:text-black text-white rounded max-w-fit bg-none dark:bg-white text-2xl font-crimsonBold">
              Event Studios
            </h1>
          </Link>
        </motion.div>

        {/* Regular menu */}
        <div className="hidden md:flex flex-row items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={`text-neutral-500 dark:text-white text-sm font-semibold mx-4 ${item.name === pathname ? "text-white dark:text-black" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

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
