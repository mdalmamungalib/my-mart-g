import { HelpCircle, RotateCw, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSideToCards = () => {
  return (
    <div className="space-y-2 ">
      {/* Container for the cards */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800 p-4 space-y-6 h-auto md:h-[200px]">
        {/* Mapping over the items */}
        {[
          {
            title: "Help Center",
            description: "Guide To Customer Care",
            icon: (
              <HelpCircle className="w-6 h-6 shrink-0 text-lime-600 dark:text-lime-400" />
            ),
            href: "/",
          },
          {
            title: "Easy Return",
            description: "Quick Refund",
            icon: (
              <RotateCw className="w-6 h-6 text-blue-600 shrink-0 dark:text-blue-400" />
            ),
            href: "/",
          },
          {
            title: "Sell on My Mart",
            description: "Million of Visitors",
            icon: (
              <Store className="w-6 h-6 text-purple-600 shrink-0 dark:text-purple-400" />
            ),
            href: "/",
          },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center space-x-4 transition-all duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            {item.icon}
            <div className="flex flex-col">
              <h2 className="text-sm font-semibold text-gray-800 uppercase dark:text-gray-200">
                {item.title}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Image Section */}
      <div >
        <Image
          width={1000}
          height={100}
          className="border border-gray-200 rounded-lg shadow-md dark:border-gray-700 w-full h-auto md:h-[190px]"
          src="https://t3.ftcdn.net/jpg/11/81/95/64/240_F_1181956487_sNhu1ZVZQZzOmDwpz978zTnycFLfnKVC.jpg"
          alt="Image"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default HeroSideToCards;
