"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
      {/* Icon */}
      <div className="p-6 bg-white rounded-full shadow-lg dark:bg-gray-800">
        <ShoppingCart className="w-16 h-16 text-gray-700 dark:text-gray-300" />
      </div>

      {/* Title */}
      <h1 className="mt-6 text-5xl font-bold text-gray-800 dark:text-white">
        404
      </h1>
      <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400">
        Oops! The page you are looking for doesn't exist.
      </p>

      {/* Redirect Button */}
      <Link
        href="/"
        className="px-6 py-3 mt-6 text-lg font-semibold text-white rounded-lg shadow-md bg-lime-600 hover:bg-lime-700 dark:bg-lime-500 dark:hover:bg-lime-600"
      >
        Back to Shopping
      </Link>
    </div>
  );
};

export default NotFoundPage;
