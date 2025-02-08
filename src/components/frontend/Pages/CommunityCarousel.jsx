"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CommunityCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 4,
    },
    desktop: { breakpoint: { max: 1440, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  };

  const marketList = [
    {
      id: 1,
      name: "Apple",
      image:
        "https://img.freepik.com/free-psd/close-up-apples-isolated_23-2151598206.jpg",
      description: "Fresh apples for a healthy lifestyle.",
    },
    {
      id: 2,
      name: "Tomato",
      image:
        "https://img.freepik.com/free-photo/tomatoes_144627-15413.jpg",
      description: "Juicy red tomatoes for your dishes.",
    },
    {
      id: 3,
      name: "Lemon",
      image:
        "https://img.freepik.com/free-vector/citrus-fruits-collection-realistic-composition_1284-15784.jpg",
      description: "Organic lemons packed with vitamin C.",
    },
    {
      id: 4,
      name: "Pineapple",
      image:
        "https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg",
      description: "Delicious tropical pineapples.",
    },
    {
      id: 5,
      name: "Fruits & Vegetables",
      image:
        "https://img.freepik.com/free-photo/creative-composition-with-fruits-texture-vibrant-colors_23-2149888001.jpg",
      description: "Farm-fresh organic produce.",
    },
    {
      id: 6,
      name: "Bakery",
      image:
        "https://img.freepik.com/free-photo/bakery-assortment-table_23-2147748871.jpg",
      description: "Freshly baked bread and pastries.",
    },
    {
      id: 7,
      name: "Dairy Products",
      image:
        "https://img.freepik.com/free-photo/dairy-products-wooden-table_144627-18047.jpg",
      description: "Premium dairy for a wholesome diet.",
    },
    {
      id: 8,
      name: "Frozen Foods",
      image:
        "https://img.freepik.com/free-photo/frozen-vegetables-mix-plate_144627-10031.jpg",
      description: "Convenient and nutritious frozen meals.",
    },
    {
      id: 9,
      name: "Spices",
      image:
        "https://img.freepik.com/free-photo/colorful-indian-spices-herbs-wooden-table_123827-20065.jpg",
      description: "Exotic spices to elevate your cooking.",
    },
    {
      id: 10,
      name: "Personal Care",
      image:
        "https://img.freepik.com/free-photo/natural-cosmetic-skincare-products_23-2148854022.jpg",
      description: "Self-care products for a healthier you.",
    },
  ];

  return (
    <Carousel
      responsive={responsive}
      ssr
      infinite
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      customTransition="transform 500ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="px-2"
    >
      {marketList.map((market) => (
        <div key={market.id} className="block group">
          <div className="overflow-hidden transition-transform duration-300 group-hover:scale-105 max-w-[450px] group-hover:py-3 border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800">
           
            <Link href="/">
              <Image
                width={556}
                height={556}
                priority
                className="object-cover w-full rounded-t h-44 md:h-52 lg:h-64"
                src={market.image}
                alt={`${market.name} image`}
              />
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-center text-gray-900 dark:text-white">
                {market.name}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {market.description.slice(0, 50)}<Link
                  href="/"
                  className="text-sm font-medium text-lime-700 hover:underline"
                >
                  ...
                </Link>
              </p>
              <div className="flex justify-between mt-4">
                <Link
                  href="/"
                  className="px-4 py-2 text-sm font-medium text-white transition-all rounded-md bg-lime-700 hover:bg-lime-600"
                >
                  Read More
                </Link>
                <Link
                  href="/"
                  className="text-sm font-medium text-lime-700 hover:underline"
                >
                  Talk to a Consultant
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CommunityCarousel;
