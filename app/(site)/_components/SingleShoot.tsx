/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SINGLE_SHOOTResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  shoot: SINGLE_SHOOTResult;
}

export default function SingleShoot({ shoot }: Props) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState("/images/work.png");
  let images: (string | undefined)[] = [];

  if (shoot?.additionalImages && shoot?.additionalImages?.length > 0) {
    images = shoot.additionalImages.map((image) =>
      image.asset?._ref ? urlFor(image.asset._ref).url() : undefined
    );
  }

  const thumbnail = shoot?.mainImage?.asset?._ref
    ? urlFor(shoot.mainImage.asset._ref).url()
    : undefined;

  images.unshift(thumbnail);

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

  const handleGoBack = () => {
    router.back();
  };

  const handleSelect = () => {
    setSelectedImage("");
  };

  return (
    <div className="flex flex-col flex-1 space-y-10 lg:space-y-20 px-3 md:px-5 lg:px-20 w-full">
      <div className="flex flex-col space-y-5">
        <button
          onClick={handleGoBack}
          className="mb-4 bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded self-start max-w-40"
        >
          Go Back
        </button>
        <h1 className="font-brittany text-primary text-6xl lg:text-7xl xl:text-8xl text-center lg:text-left mx-auto">
          {shoot?.name}
        </h1>
      </div>

      <div className="w-full flex flex-col space-y-10 lg:space-y-16">
        {/* IMAGE GRID */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden"
        >
          {images?.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 0.98 }}
                  transition={{ ease: "easeOut" }}
                  className="aspect-square  w-full max-h-96 shadow-md relative group"
                >
                  <Image
                    src={image || "https://placehold.co/550x310/png"}
                    alt="lorem"
                    className="w-full h-full object-cover object-center rounded-lg "
                    priority
                    fill
                  />
                </motion.div>
              </DialogTrigger>
              <DialogContent>
                <h3>aaadscdf</h3>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
