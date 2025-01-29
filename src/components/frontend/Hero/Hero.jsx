"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import { HelpCircle, RotateCw, Store } from "lucide-react";
import HeroSideToCards from "../Pages/HeroSideToCards";
import HeroCategoryCard from "../Pages/HeroCategoryCard";
export const dynamic = "force-dynamic";

const Hero = () => {
  return (
    <div className="grid grid-cols-12 gap-8 mb-6">
      {/* Category */}
      <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800 h-[400px] sm:col-span-2 hidden sm:block md:hidden">
        <HeroCategoryCard />
      </div>
      
      {/* Hero Carousel */}
      <div className="col-span-full sm:col-span-8  rounded-md h-[300px] mt-3 sm:mt-0">
        <HeroCarousel />
      </div>

      {/* Help Center */}
      <div className="col-span-2 space-y-2 overflow-hidden sm:block md:col-span-3">
        <HeroSideToCards />
      </div>
    </div>
  );
};

export default Hero;
