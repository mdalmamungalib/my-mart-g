"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MarketCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <Link href="/" className="rounded-lg">
        <Image
          width={556}
          height={556}
          className="object-cover w-full"
          src="https://img.freepik.com/free-photo/spices-spoons-wooden-table_176420-111.jpg?ga=GA1.1.518786193.1722775559&semt=ais_hybrid"
          alt="Market"
        />
        <h2 className="bg-slate-600 text-slate-300">Vegetables</h2>
      </Link>
      <Link href="/" className="rounded-lg">
        <Image
          width={556}
          height={556}
          className="object-cover w-full"
          src="https://img.freepik.com/free-photo/spices-spoons-wooden-table_176420-111.jpg?ga=GA1.1.518786193.1722775559&semt=ais_hybrid"
          alt="Market"
        />
        <h2 className="bg-slate-600 text-slate-300">Vegetables</h2>
      </Link>
      <Link href="/" className="rounded-lg">
        <Image
          width={556}
          height={556}
          className="object-cover w-full"
          src="https://img.freepik.com/free-photo/spices-spoons-wooden-table_176420-111.jpg?ga=GA1.1.518786193.1722775559&semt=ais_hybrid"
          alt="Market"
        />
        <h2 className="bg-slate-600 text-slate-300">Vegetables</h2>
      </Link>
      <Link href="/" className="rounded-lg">
        <Image
          width={556}
          height={556}
          className="object-cover w-full"
          src="https://img.freepik.com/free-photo/spices-spoons-wooden-table_176420-111.jpg?ga=GA1.1.518786193.1722775559&semt=ais_hybrid"
          alt="Market"
        />
        <h2 className="bg-slate-600 text-slate-300">Vegetables</h2>
      </Link>
    </Carousel>
  );
};

export default MarketCarousel;
