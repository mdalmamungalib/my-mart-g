"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CategoryCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
    },
  };


  const marketList = [
    {
      id: 1,
      name: "Apple",
      image:
        "https://img.freepik.com/free-psd/close-up-apples-isolated_23-2151598206.jpg?ga=GA1.1.518786193.1722775559&semt=ais_hybrid",
      description:
        "Authentic Indian masalas to spice up your meals.",
    },
    {
      id: 2,
      name: "Tomato",
      image:
        "https://img.freepik.com/free-photo/tomatoes_144627-15413.jpg?ga=GA1.1.518786193.1722775559&semt=ais_hybrid",
      description:
        "Crunchy and delicious snacks for every occasion.",
    },
    {
      id: 3,
      name: "Lemon",
      image:
        "https://img.freepik.com/free-vector/citrus-fruits-collection-realistic-composition_1284-15784.jpg?ga=GA1.1.518786193.1722775559&semt=ais_hybrid",
      description: "Refreshing beverages for a healthy lifestyle.",
    },
    {
      id: 4,
      name: "Anaros",
      image:
        "https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?ga=GA1.1.518786193.1722775559&semt=ais_hybrid",
      description:
        "Daily essentials and groceries at the best prices.",
    },
    {
      id: 5,
      name: "Fruits & Vegetables",
      image:
        "https://img.freepik.com/free-photo/creative-composition-with-fruits-texture-vibrant-colors_23-2149888001.jpg?ga=GA1.1.518786193.1722775559&semt=ais_hybrid",
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
    
    <Carousel
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="transform 500ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="px-2"
    >
      {marketList.map((market) => (
        <Link key={market.id} href="/" className="block group">
          <div className="overflow-hidden transition-transform duration-300 group-hover:scale-105 max-w-[250px] group-hover:py-2">
            <Image
              width={556}
              height={556}
              className="object-cover w-full rounded-xl h-44 md:h-52 lg:h-64"
              src={market.image}
              alt={market.name}
            />
            <h2 className="py-2 text-sm font-semibold text-center text-gray-900 md:text-lg dark:text-white">
              {market.name}
            </h2>
          </div>
        </Link>
      ))}
    </Carousel>

  );
};

export default CategoryCarousel;
