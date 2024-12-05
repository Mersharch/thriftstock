/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ALL_CATEGORIESResult, ALL_SHOOTSResult } from "@/sanity.types";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  categories: ALL_CATEGORIESResult;
  shoots: ALL_SHOOTSResult;
}

const ImageGallery = ({ categories, shoots }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    categories[0]?.slug?.current
  );
  const [filteredShoots, setFilteredShoots] = useState<ALL_SHOOTSResult>([]);

  // Add useEffect to filter shoots on initial load
  useEffect(() => {
    if (selectedCategory) {
      handleFilter(selectedCategory);
    }
  }, [selectedCategory]);

  const handleClick = (category: string | undefined) => {
    setSelectedCategory(category);
  };

  const handleFilter = (category: string | undefined) => {
    const filtered = shoots.filter(
      (shoot) => shoot.category?.slug?.current === category
    );
    setFilteredShoots(filtered);
  };

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
    <div className="w-full flex flex-col space-y-10 lg:space-y-16">
      {/* CATEGORIES */}
      <div className="flex flex-row space-x-3 relative w-full overflow-x-scroll">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            onClick={() => handleClick(category.slug?.current)}
            className={`w-40 flex justify-center items-center cursor-pointer relative rounded-full`}
            initial={{ opacity: 1 }}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              backgroundColor:
                selectedCategory === category.slug?.current
                  ? "#2A7168"
                  : "transparent",
              transition: { duration: 0.3 },
            }}
          >
            <motion.h4
              animate={{
                color:
                  selectedCategory === category.slug?.current
                    ? "#fff"
                    : "#2A7168",
                transition: { duration: 0.3 },
              }}
              className="md:font-bold text-xs md:text-sm lg:text-base my-2 lg:my-3"
            >
              {category.title}
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
        {filteredShoots.map((shoot, index) => {
          const thumbnail = shoot.mainImage?.asset?._ref
            ? urlFor(shoot.mainImage.asset._ref).url()
            : undefined;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ ease: "easeOut" }}
              className="aspect-square bg-slate-500 w-full max-h-96 shadow-md relative group"
            >
              <Image
                src={thumbnail || "https://placehold.co/550x310/png"}
                alt="lorem"
                className="w-full h-full object-cover object-center"
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
                  {shoot.name}
                </h3>
                <Button
                  asChild
                  className="text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4"
                >
                  <Link href={`/gallery/${shoot.slug?.current}`}>
                    view gallery
                  </Link>
                </Button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ImageGallery;
