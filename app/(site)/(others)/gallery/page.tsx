"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("weddings");
  const categories = [
    { name: "Weddings", slug: "weddings" },
    { name: "Graduations", slug: "graduations" },
    { name: "Real Estate", slug: "real-estate" },
    { name: "Product", slug: "product" },
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col flex-1 space-y-20 lg:space-y-40 px-3 md:px-5 lg:px-20 w-full">
      <h1 className="font-brittany text-primary text-6xl lg:text-7xl xl:text-8xl text-center lg:text-left mx-auto">
        Gallery
      </h1>

      <div className="w-full flex flex-col space-y-10 lg:space-y-16">
        {/* CATEGORIES */}
        <div className="flex flex-row space-x-3 relative w-full overflow-x-scroll">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedCategory(category.slug)}
              className={`w-40 flex justify-center items-center cursor-pointer relative rounded-full`}
              initial={{ opacity: 1 }}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundColor:
                  selectedCategory === category.slug
                    ? "#2A7168"
                    : "transparent",
                transition: { duration: 0.3 },
              }}
            >
              <motion.h4
                animate={{
                  color:
                    selectedCategory === category.slug ? "#fff" : "#2A7168",
                  transition: { duration: 0.3 },
                }}
                className="md:font-bold text-xs md:text-sm lg:text-base my-2 lg:my-3"
              >
                {category.name}
              </motion.h4>
            </motion.div>
          ))}
        </div>

        {/* IMAGE GRID */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden"
        >
          {Array.from({ length: 9 }, (_, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ ease: "easeOut" }}
              className="aspect-square bg-slate-500 w-full max-h-96 shadow-md relative group"
            >
              <Image
                src="/images/work.png"
                alt="lorem"
                className="w-full h-full object-cover object-center rounded-lg"
                priority
                fill
              />
              <div
                className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-65 
                             flex flex-col justify-center items-center 
                             space-y-2 sm:space-y-3 
                             transition-opacity duration-300 ease-in-out"
              >
                <h3 className="text-xl lg:text-2xl xl:text-4xl text-white text-center px-2">
                  Jeremy&apos;s wedding
                </h3>
                <Button
                  asChild
                  className="text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4"
                >
                  <Link href="/gallery/a">view gallery</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
