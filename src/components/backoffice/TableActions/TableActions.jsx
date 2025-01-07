import { Download, Search, Trash2 } from 'lucide-react';
import React from 'react';

const TableActions = () => {
    return (
        <div className="flex items-center justify-between gap-8 px-12 py-6 rounded-lg dark:bg-slate-700 bg-slate-100">
        {/* export */}
        <button className="dark:text-white text-slate-700 dark:bg-slate-900 bg-[#f9fafb] font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center gap-2 border border-lime-500">
          <Download />
          <span>Export</span>
        </button>
        {/* search */}
        <div className="flex-grow ">
          <label for="table-search" className="sr-only">
            Search
          </label>
          <div className="relative ">
            <div className="absolute inset-y-0 flex items-center pointer-events-none rtl:inset-r-0 start-0 ps-3">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="table-search"
              className="block w-full pt-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        {/* delete */}
        <button className="flex items-center justify-center gap-2 text-white bg-red-600 rounded-lg text-sm px-5 py-2.5">
          <Trash2 />
          <span>Bulk Delete</span>
        </button>
      </div>
    );
};

export default TableActions;