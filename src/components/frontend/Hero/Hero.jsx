"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import { HelpCircle, RotateCw, Store } from "lucide-react";
export const dynamic = "force-dynamic";

const Hero = () => {
  const categories = [
    {
      id: 1,
      name: "Masala",
      image:
        "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
      description:
        "Authentic Indian masalas to spice up your meals.",
    },
    {
      id: 2,
      name: "Snacks",
      image:
        "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
      description:
        "Crunchy and delicious snacks for every occasion.",
    },
    {
      id: 3,
      name: "Beverages",
      image:
        "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
      description: "Refreshing beverages for a healthy lifestyle.",
    },
    {
      id: 4,
      name: "Groceries",
      image:
        "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
      description:
        "Daily essentials and groceries at the best prices.",
    },
    {
      id: 5,
      name: "Fruits & Vegetables",
      image:
        "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
      description: "Fresh and organic fruits and vegetables.",
    },
    {
      id: 6,
      name: "Bakery",
      image:
        "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
      description: "Freshly baked bread and bakery items.",
    },
    {
      id: 7,
      name: "Dairy Products",
      image:
        "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
      description:
        "High-quality dairy products for your daily needs.",
    },
    {
      id: 8,
      name: "Frozen Foods",
      image:
        "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
      description: "Quick and easy frozen foods for busy days.",
    },
    {
      id: 9,
      name: "Spices",
      image:
        "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
      description: "Exotic spices to enhance your cooking.",
    },
    {
      id: 10,
      name: "Personal Care",
      image:
        "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
      description:
        "Skincare, haircare, and personal hygiene products.",
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-8 mb-6">
      {/* category */}
      <div className=" overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800 h-[400px] col-span-2">
        {/* Header */}
        <h2 className="px-6 py-4 text-lg font-semibold text-center border-b border-gray-200 dark:border-gray-600 bg-slate-100 dark:bg-gray-700 dark:text-white">
          Shop By Category
        </h2>

        {/* Scrollable Container */}
        <div className="h-[350px] overflow-y-auto space-y-4 px-4 py-6">
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
                  className="object-cover border rounded-full border-lime-600 h-14 w-14"
                  src={category.image}
                  alt={`${category.name} image`}
                />
                <span className="ml-4 text-gray-800 dark:text-gray-200">
                  {category.name}
                </span>
              </div>

              {/* Text Slide (Appears on Hover) */}
              <div className="absolute left-0 flex items-center justify-center w-full h-full px-4 text-lg font-medium text-gray-800 transition-transform duration-300 transform rounded-lg top-full bg-lime-300 dark:text-gray-200 dark:bg-lime-800 group-hover:-translate-y-full">
                {category.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="col-span-7  rounded-md h-[300px]">
        <HeroCarousel />
      </div>
      <div className="col-span-3 space-y-2">
        {/* Help Center */}
        <div className=" bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800 p-4 space-y-6 h-auto md:h-[200px]">
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
        <div className="">
          <img className="border border-gray-200 rounded-lg shadow-md dark:border-gray-700    h-auto md:h-[200px] w-full" src="https://t3.ftcdn.net/jpg/11/81/95/64/240_F_1181956487_sNhu1ZVZQZzOmDwpz978zTnycFLfnKVC.jpg" alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
