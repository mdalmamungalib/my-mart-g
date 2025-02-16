"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TbCurrencyTaka } from "react-icons/tb";
import { ShoppingBag } from "lucide-react";

const CategoryCarousel = ({ products }) => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1440 }, items: 6 },
    desktop: { breakpoint: { max: 1440, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 3 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 2 },
  };

  return (
    <Carousel
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="transform 500ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="px-2"
    >
      {products.map((product) => (
        <div key={product.id} className="overflow-hidden bg-white border rounded-lg shadow-md group dark:bg-gray-800">
          {/* Product Image */}
          <Link href={`/products/${product.slug}`}>
            <div className="relative w-full overflow-hidden h-52 md:h-64 lg:h-72">
              <Image
                src={product.imageUrl || "/placeholder.png"}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          </Link>

          {/* Product Details */}
          <div className="p-4">
            <Link href={`/products/${product.slug}`}>
              <h2 className="text-sm font-semibold text-center text-gray-900 truncate md:text-lg dark:text-white">
                {product.title}
              </h2>
            </Link>

            <div className="flex items-center justify-between mt-3">
              {/* Price */}
              <p className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-200">
                <TbCurrencyTaka className="text-xl" />
                {product.salePrice}
              </p>

              {/* Add to Cart Button */}
              <button className="flex items-center gap-2 px-4 py-2 text-white transition rounded-md bg-lime-600 hover:bg-lime-700">
                <ShoppingBag />
                <span className="hidden md:block">Add</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CategoryCarousel;
