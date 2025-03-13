"use client";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  text?: string;
}

function Loader({ text = "Loading..." }: LoaderProps) {
  // Animation for individual characters
  const waveAnimation = {
    animate: (i: number) => ({
      y: [-10, 0, -10],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatDelay: 0.05,
        ease: "easeInOut",
        delay: i * 0.05, // Stagger the start time
      },
    }),
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-[1px] flex items-center justify-center z-50"
      >
        <div className=" px-8 py-6">
          <div className="flex space-x-1">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                animate="animate"
                variants={waveAnimation}
                className="text-white text-3xl font-bold"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Loader;
