"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CommunityCarousel = ({trainings}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 4,
    },
    desktop: { breakpoint: { max: 1440, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  };

  

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
      {trainings.map((training) => (
        <div key={training.id} className="block group">
          <div className="overflow-hidden transition-transform duration-300 group-hover:scale-105 max-w-[450px] group-hover:py-3 border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800 ">
            <Link href="/">
              <Image
                width={556}
                height={556}
                priority
                className="object-cover w-full rounded-t h-44 md:h-52 lg:h-64"
                src={training.imageUrl}
                alt={`${training.title} image`}
              />
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-center text-gray-900 dark:text-white">
                {training.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {training.description.length > 25
                  ? `${training.description.slice(0, 25)}...`
                  : training.description}
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
