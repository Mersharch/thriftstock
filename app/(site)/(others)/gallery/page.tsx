"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

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
                className="md:font-bold text-xs md:text-sm lg:text-base my-1 md:my-2"
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
          className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {Array.from({ length: 9 }, (_, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ ease: "easeOut" }}
              className="aspect-square bg-slate-500 w-full max-h-96 shadow-md"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
