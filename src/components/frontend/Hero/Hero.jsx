"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
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
        "https://media.istockphoto.com/id/1316764256/photo/indian-snacks-served-in-bowl-over-multiple-backgrounds.jpg?s=612x612&w=0&k=20&c=txW2Ny2TLNMG62AXSV_PYNoBIRHhOVGPrdrW-fyPtW8=",
      description:
        "Crunchy and delicious snacks for every occasion.",
    },
    {
      id: 3,
      name: "Beverages",
      image:
        "https://media.istockphoto.com/id/1195315756/photo/indian-masala-tea.jpg?s=612x612&w=0&k=20&c=ZPFRF9x1zo5GowMl87H_z_-AS-2hBIRdJ_1rnfyLKeg=",
      description: "Refreshing beverages for a healthy lifestyle.",
    },
    {
      id: 4,
      name: "Groceries",
      image:
        "https://media.istockphoto.com/id/1330197691/photo/grocery-shopping.jpg?s=612x612&w=0&k=20&c=j_GSV-DNxM6SW4AdWaN0ayRluZmToCJbIhZKaQn0qiY=",
      description:
        "Daily essentials and groceries at the best prices.",
    },
    {
      id: 5,
      name: "Fruits & Vegetables",
      image:
        "https://media.istockphoto.com/id/1267592122/photo/colorful-fresh-organic-vegetables.jpg?s=612x612&w=0&k=20&c=FbTnmtSD_zl6Kh5yAWXk5H8BPPOXVhcJNzLj8OqJh1U=",
      description: "Fresh and organic fruits and vegetables.",
    },
    {
      id: 6,
      name: "Bakery",
      image:
        "https://media.istockphoto.com/id/1278126215/photo/delicious-bread-bakery-products.jpg?s=612x612&w=0&k=20&c=babK1TfKKNTwwD-8Xm-QAfUzlwEqbsSGkUq-qFsS39U=",
      description: "Freshly baked bread and bakery items.",
    },
    {
      id: 7,
      name: "Dairy Products",
      image:
        "https://media.istockphoto.com/id/495293406/photo/dairy-products.jpg?s=612x612&w=0&k=20&c=vAdx8OWg2FCyB5qY5Ch4ChqTfpQ1zNjMoMOkCCiX8qM=",
      description:
        "High-quality dairy products for your daily needs.",
    },
    {
      id: 8,
      name: "Frozen Foods",
      image:
        "https://media.istockphoto.com/id/618359452/photo/assorted-frozen-products.jpg?s=612x612&w=0&k=20&c=1tYyHLTebB9j5b3XJXtHOVxPU5B5gOpq1CP5-bzKa8I=",
      description: "Quick and easy frozen foods for busy days.",
    },
    {
      id: 9,
      name: "Spices",
      image:
        "https://media.istockphoto.com/id/177390670/photo/variety-of-spices.jpg?s=612x612&w=0&k=20&c=lo5euH_T1wfl3RDM9YlNHhxjKNFG3xNBPeByC8BsQ5I=",
      description: "Exotic spices to enhance your cooking.",
    },
    {
      id: 10,
      name: "Personal Care",
      image:
        "https://media.istockphoto.com/id/1286211015/photo/personal-care-products.jpg?s=612x612&w=0&k=20&c=AJebmFvWt9VSOEUFYunNxjwnrwh3FfgKPL3E3DFSY1U=",
      description:
        "Skincare, haircare, and personal hygiene products.",
    },
  ];

  return (
    <div className="flex gap-8">
      {/* category */}
      <div className="w-full overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md sm:w-1/3 dark:border-gray-700 dark:bg-gray-800">
        {/* Header */}
        <h2 className="px-6 py-4 text-lg font-semibold text-center border-b border-gray-200 dark:border-gray-600 bg-slate-100 dark:bg-gray-700 dark:text-white">
          Shop By Category
        </h2>

        {/* Scrollable Container */}
        <div className="h-[300px] overflow-y-auto space-y-4 px-4 py-6">
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
      <div className="w-2/3 bg-blue-600 rounded-md h-[300px]">
        <HeroCarousel />
      </div>
    </div>
  );
};

export default Hero;