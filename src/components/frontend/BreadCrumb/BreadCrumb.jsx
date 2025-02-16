import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const BreadCrumb = ({items}) => {
  return (
    <nav className="flex items-center" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {/* Home Link */}
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <Home className="w-4 h-4 me-2.5" />
            Home
          </Link>
        </li>

        {/* Dynamic Breadcrumb Links */}
        {items.map((item, index) => (
          <li key={index} aria-current={item.current ? "page" : undefined}>
            <div className="flex items-center">
              <ChevronRight className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" />
              {item.current ? (
                <span className="text-sm font-medium text-gray-500 ms-1 md:ms-2 dark:text-gray-400">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-700 ms-1 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
