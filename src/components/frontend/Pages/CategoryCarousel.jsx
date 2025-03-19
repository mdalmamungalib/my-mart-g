"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TbCurrencyTaka } from "react-icons/tb";
import { ShoppingBag } from "lucide-react";
import Product from "../Product/Product";

const CategoryCarousel = ({ products }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 6,
    },
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
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="transform 500ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="px-2"
    >
      {products.map((product, i) => {
        return <Product product={product} key={i} />;
      })}
    </Carousel>
  );
};

export default CategoryCarousel;
