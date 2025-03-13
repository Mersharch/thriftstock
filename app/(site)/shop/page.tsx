"use client";
import ProductGrid from "@/components/ProductGrid";
// import ProductGridSkeleton from "@/components/ProductGridSkeleton";
import SortAndFilter from "@/components/SortAndFilter";
import React, { useState, useMemo } from "react";

function Page() {
  const [sortBy, setSortBy] = useState("featured");

  const sampleProducts = useMemo(
    () => [
      {
        id: "prod-001",
        name: "BSP Cargos",
        price: 220.0,
        images: [],
        category: "Men's Pants",
        discountPercentage: 0,
        currency: "₵",
        stock: 15,
      },
      {
        id: "prod-002",
        name: "Vintage Denim Jacket",
        price: 350.0,
        images: ["/images/IMG_1228.JPG"],
        category: "Women's Outerwear",
        discountPercentage: 15,
        currency: "₵",
        stock: 3,
      },
      {
        id: "prod-003",
        name: "Classic White Tee",
        price: 85.0,
        images: ["/images/IMG_1228.JPG"],
        category: "Unisex",
        discountPercentage: 0,
        currency: "₵",
        stock: 42,
      },
      {
        id: "prod-004",
        name: "Distressed Jorts",
        price: 120.0,
        images: [],
        category: "Men's Shorts",
        discountPercentage: 25,
        currency: "₵",
        stock: 7,
      },
      {
        id: "prod-005",
        name: "Plaid Flannel Shirt",
        price: 175.0,
        images: ["/images/IMG_1228.JPG"],
        category: "Women's Tops",
        discountPercentage: 0,
        currency: "₵",
        stock: 22,
      },
      {
        id: "prod-006",
        name: "Kid's Graphic Tee",
        price: 65.0,
        images: ["/images/IMG_1229.JPG"],
        category: "Kid's",
        discountPercentage: 10,
        currency: "₵",
        stock: 18,
      },
    ],
    []
  );

  const sortedProducts = useMemo(() => {
    const sorted = [...sampleProducts];

    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "name":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      default: // "featured"
        return sorted;
    }
  }, [sampleProducts, sortBy]);

  return (
    <div className="w-full flex-1 min-h-screen bg-background pt-4 sm:pt-6 md:pt-8 lg:pt-10">
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl w-full text-center text-slate-900 mb-3 sm:mb-4 md:mb-5 px-4">
        Shop all Men&apos;s
      </h1>

      <div className="w-full flex-1 bg-white pb-6 sm:pb-8 md:pb-10 space-y-3 sm:space-y-4 md:space-y-5">
        <SortAndFilter onSortChange={setSortBy} />
        <ProductGrid products={sortedProducts} />
      </div>
    </div>
  );
}

export default Page;
