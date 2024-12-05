import React from "react";

import { getCategories } from "@/sanity/services/getCategories";
import ImageGallery from "../../_components/ImageGallery";
import { getShoots } from "@/sanity/services/getShoots";

export default async function Gallery() {
  const categories = await getCategories();
  const shoots = await getShoots();

  return (
    <div className="flex flex-col flex-1 space-y-20 lg:space-y-40 px-3 md:px-5 lg:px-20 w-full">
      <h1 className="font-brittany text-primary text-6xl lg:text-7xl xl:text-8xl text-center lg:text-left mx-auto">
        Gallery
      </h1>

      <ImageGallery categories={categories} shoots={shoots} />
    </div>
  );
}
