import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define the Product type to ensure type safety
export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  category?: string;
  discountPercentage?: number;
  currency?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Calculate the discounted price if applicable
  const finalPrice = product.discountPercentage
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;

  // Format the price with the appropriate currency symbol
  const currencySymbol = product.currency || "₵";
  const formattedPrice = `${currencySymbol} ${finalPrice.toFixed(2)}`;

  return (
    <Link href={`/product/${product.id}`} className="block h-full">
      <div className="group cursor-pointer overflow-hidden bg-white hover:shadow-md transition-all ease-in-out duration-300 h-full flex flex-col">
        {/* IMAGES */}
        <div className="relative w-full overflow-hidden">
          {/* Different aspect ratios for different screen sizes */}
          <div className="aspect-[4/5] sm:aspect-[3/4] md:aspect-[9/16] lg:aspect-[3/4] xl:aspect-[9/16] w-full">
            {product.images && product.images.length > 0 ? (
              <Image
                src={product.images[0]}
                alt={product.name}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={false}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-white p-4">
                <Image
                  src={"/images/logoblack.png"}
                  alt={"thiftstock"}
                  className="h-full w-full object-contain"
                  width={80}
                  height={80}
                />
              </div>
            )}

            {/* Discount badge if applicable */}
            {product.discountPercentage && (
              <div className="absolute left-2 top-2 sm:top-3 md:top-4 rounded bg-slate-300 px-2 sm:px-3 py-1 text-xs font-bold text-slate-500">
                Sale
              </div>
            )}
          </div>
        </div>

        {/* Product details */}
        <div className="p-2 sm:p-3 md:p-4 flex-grow flex flex-col justify-between">
          <div>
            {product.category && (
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 truncate">
                {product.category}
              </p>
            )}

            <h3 className="text-gray-800 font-semibold text-xs sm:text-sm md:text-base mb-1 line-clamp-2">
              {product.name}
            </h3>
          </div>

          <div className="flex items-center justify-between mt-1 sm:mt-2">
            <p className="text-xs sm:text-sm md:text-base font-bold">
              {formattedPrice}
            </p>

            {product.discountPercentage ? (
              <p className="text-xs text-gray-500 line-through">
                {`${currencySymbol} ${product.price.toFixed(2)}`}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}
