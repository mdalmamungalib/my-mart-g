
import { getData } from "lib/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroCategoryCard = ({categories}) => {
 
  
  return (
    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800 lg:max-h-[400px]  md:max-h-[265px]  ">
      {/* Header */}
      <h2 className="sm:px-6 px-6 sm:py-4 py-2 font-semibold text-center border-b border-gray-200 text-[10px] sm:text-lg dark:border-gray-600 bg-slate-100 dark:bg-gray-700 dark:text-white">
        Shop By Category ({categories.length})
      </h2>

      {/* Scrollable Container */}
      <div className="lg:max-h-[338px] md:max-h-[200px] sm:space-y-4 sm:px-4 px-2 sm:py-6 py-3 overflow-y-auto space-y-1 max-h-[85px]">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="relative block w-full overflow-hidden group"
          >
            {/* Image */}
            <div className="relative flex items-center transition-transform duration-300 transform group-hover:-translate-y-full">
              <Image
                height={100}
                width={100}
                className="object-cover border rounded-full border-lime-600 sm:max-h-14 sm:max-w-14 max-w-6 max-h-6"
                src={category.imageUrl}
                alt={`${category.title} image`}
              />
              <span className="ml-1 text-xs text-gray-800 sm:ml-4 dark:text-gray-200 sm:text-lg">
                {category.title}
              </span>
            </div>

            {/* Text Slide (Appears on Hover) */}
            <div className="absolute left-0 flex items-center justify-center w-full h-full px-4 py-3 text-xs font-medium text-gray-800 transition-transform duration-300 transform rounded-lg sm:text-lg top-full bg-lime-300 dark:text-gray-200 dark:bg-lime-800 group-hover:-translate-y-full sm:py-0">
              {category.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeroCategoryCard;
