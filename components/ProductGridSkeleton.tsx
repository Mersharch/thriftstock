"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProductGridSkeleton({ count = 8 }) {
  // Animation for the shimmer effect
  const shimmer = {
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        repeat: Infinity,
        repeatType: "mirror" as const,
        duration: 1.5,
        ease: "linear",
      },
    },
  };

  // Create an array of skeleton items based on count
  const skeletonItems = Array(count).fill(0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {skeletonItems.map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col"
        >
          {/* SKELETON IMAGE */}
          <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              variants={shimmer}
              animate="animate"
              style={{
                background:
                  "linear-gradient(90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%)",
                backgroundSize: "200% 200%",
              }}
            />
          </div>

          {/* SKELETON CONTENT */}
          <div className="p-4 flex flex-col space-y-3">
            {/* SKELETON TITLE */}
            <div className="relative overflow-hidden h-6 w-3/4 bg-gray-200 rounded">
              <motion.div
                className="absolute inset-0"
                variants={shimmer}
                animate="animate"
                style={{
                  background:
                    "linear-gradient(90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%)",
                  backgroundSize: "200% 200%",
                }}
              />
            </div>

            {/* SKELETON PRICE */}
            <div className="relative overflow-hidden h-5 w-1/3 bg-gray-200 rounded">
              <motion.div
                className="absolute inset-0"
                variants={shimmer}
                animate="animate"
                style={{
                  background:
                    "linear-gradient(90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%)",
                  backgroundSize: "200% 200%",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
