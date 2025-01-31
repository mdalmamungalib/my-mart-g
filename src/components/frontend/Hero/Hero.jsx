"use client";
import React from "react";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import HeroSideToCards from "../Pages/HeroSideToCards";
import HeroCategoryCard from "../Pages/HeroCategoryCard";

export const dynamic = "force-dynamic";

const Hero = () => {
  return (
    <div className="grid grid-cols-12 gap-8 mt-3 mb-6 sm:mt-0">
      {/* Category (Hidden on small screens, shown on lg screens) */}
      <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800 lg:max-h-[400px] lg:col-span-3 md:col-span-4 md:max-h-[265px] sm:col-span-4">
        <HeroCategoryCard />
      </div>

      {/* Hero Carousel (Full width on small, lg:col-span-8 on large) */}
      <div className="sm:col-span-8 lg:col-span-6 rounded-md max-h-[400px] md:col-span-8">
        <HeroCarousel />
      </div>

      {/* Help Center (Full width on small, sm:col-span-2 on larger screens) */}
      <div className="lg:col-span-3 overflow-hidden max-h-[400px] lg:block hidden">
        <HeroSideToCards />
      </div>
    </div>
  );
};

export default Hero;
