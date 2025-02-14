"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CategoryCarousel = ({products}) => {
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
      {products.map((product) => (
        <Link key={product.id} href="/" className="block group">
          <div className="overflow-hidden transition-transform duration-300 group-hover:scale-105 max-w-[250px]">
            <Image
              width={556}
              height={556}
              className="object-cover w-full rounded-xl h-44 md:h-52 lg:h-64"
              src={product.imageUrl}
              alt={product.title}
            />
            <h2 className="py-2 text-sm font-semibold text-center text-gray-900 md:text-lg dark:text-white">
              {product.title}
            </h2>
          </div>
        </Link>
      ))}
    </Carousel>

  );
};

export default CategoryCarousel;
