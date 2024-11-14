import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Link from "next/link";
import { ROUTES } from "@/lib/route";
// import { ThemeToggle } from "./ThemeToggle";
import { Home, MessageCircleDashed, User2 } from "lucide-react";
import * as motion from "framer-motion/client";

function NavBar() {
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
    <nav className="w-full  ">
      <main className="w-full px-4 py-3 hidden  md:flex flex-row bg-transparent items-center justify-between">
        {/* LOGO */}
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{
            ease: "easeInOut",
            type: "spring",
            duration: 0.5,
            damping: 10,
            stiffness: 250,
          }}
        >
          <Link href={ROUTES.home}>
            <h1 className="p-2 hover:scale-110 transition-all ease-in-out cursor-pointer dark:text-black text-white rounded max-w-fit bg-none dark:bg-white text-2xl font-crimsonBold">
              Event Studios
            </h1>
          </Link>
        </motion.div>

        {/* FLOATING NAV */}
        <FloatingNav navItems={navItems} />

        {/* MODE TOGGLE */}
        {/* <ThemeToggle /> */}
      </main>
    </nav>
  );
}

export default NavBar;
