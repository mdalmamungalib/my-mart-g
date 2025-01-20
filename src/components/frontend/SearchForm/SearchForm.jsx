import { Building2, Search } from "lucide-react";
import React from "react";

const SearchForm = () => {
  return (
    <div className="flex">
      {/* Icon and Input Field */}
      <div className="relative flex-grow">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="absolute inset-y-0 flex items-center pointer-events-none start-2">
          <Building2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="text"
          id="table-search"
          className="w-full py-2 pl-10 pr-4 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-lime-500 dark:focus:border-lime-500"
          placeholder="Search Products..."
        />
      </div>

      {/* Search Button with animation */}
      <button
        className="flex items-center gap-2 px-4 py-2 ml-3 text-sm font-medium text-white transition-all duration-200 ease-in-out transform rounded-lg shadow bg-lime-600 hover:bg-lime-700 dark:bg-lime-700 dark:hover:bg-lime-800 hover:scale-105 hover:shadow-lg active:scale-100 active:shadow-sm"
        type="button"
      >
        <Search className="w-5 h-5" />
        Search
      </button>
    </div>
  );
};

export default SearchForm;
