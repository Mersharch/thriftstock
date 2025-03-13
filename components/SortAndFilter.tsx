"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface SortAndFilterProps {
  onSortChange: (value: string) => void;
}

function SortAndFilter({ onSortChange }: SortAndFilterProps) {
  const filters = ["Men's", "Women's", "Kid's", "Denims", "Cargos", "Jorts"];

  return (
    <section className="w-full px-2 sm:px-8 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      {/* FILTERS */}
      <div className="w-full flex justify-center md:justify-start overflow-x-auto scrollbar-hide">
        <div className="flex flex-row items-center space-x-4 sm:space-x-6 lg:space-x-8 min-w-max pb-2 sm:pb-0">
          {filters.map((filter) => (
            <span
              key={filter}
              className="text-slate-500 whitespace-nowrap hover:text-slate-700 hover:scale-105 transition-all ease-in-out cursor-pointer text-sm font-medium sm:font-bold"
            >
              {filter}
            </span>
          ))}
        </div>
      </div>

      {/* SORTING */}
      <div className="sm:w-auto flex-shrink-0 self-end">
        <Select onValueChange={onSortChange}>
          <SelectTrigger className="w-full outline-none ring-0 focus:ring-0 focus:outline-none bg-white ring-offset-0 px-1 py-1 border-none focus:ring-offset-0">
            <span className="text-slate-700 font-bold mr-1 text-sm">
              Sort by:{" "}
            </span>
            <SelectValue placeholder="Featured" />
          </SelectTrigger>
          <SelectContent className="outline-none ring-0 focus:ring-0 focus:outline-none">
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="name">Name</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}

export default SortAndFilter;
