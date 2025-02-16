import Link from "next/link";
import React from "react";
import CategoryCarousel from "../Pages/CategoryCarousel";

const CategoryList = ({ category }) => {
  if (!category) {
    return <p className="text-center text-red-500">No category data available.</p>;
  }
  return (
    <div className="h-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700">
      <div className="sm:px-6 px-6 sm:py-4 py-2 font-semibold text-center border-b border-gray-200 text-[10px] sm:text-lg dark:border-gray-600 bg-slate-100
       dark:bg-gray-800 dark:text-white flex justify-between items-center">
        <h2>{category.title || "No Title"}</h2>
        <Link
          href="/"
          className="px-4 py-2 transition-all rounded-md bg-lime-700 hover:bg-lime-600 text-slate-50"
        >
          See All
        </Link>
      </div>
      <div className="px-4 py-2">
        <CategoryCarousel products={category.products || []} />
      </div>
    </div>
  );
};

export default CategoryList;
