"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./HeroCarousel.css";
import Image from "next/image";

const HeroCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [swiperInstance, setSwiperInstance] = useState(null); // To store the swiper instance

  const slides = [
    {
      id: 1,
      image:
        "https://slidebazaar.com/wp-content/uploads/2021/09/exclusive-offers-for-products-jpg.webp",
      alt: "Dabba Masala",
    },
    {
      id: 2,
      image:
        "https://slidebazaar.com/wp-content/uploads/2021/09/product-powerpoint-template-jpg.webp",
      alt: "Pexels Food",
    },
    {
      id: 3,
      image:
        "https://slidebazaar.com/wp-content/uploads/2021/09/super-sale-product-template-jpg.webp",
      alt: "Dabba Masala 2",
    },
    {
      id: 4,
      image:
        "https://slidebazaar.com/wp-content/uploads/2021/09/product-template-1-jpg.webp",
      alt: "Dabba Masala 3",
    },
    {
      id: 5,
      image:
        "https://slidebazaar.com/wp-content/uploads/2021/09/product-banner-jpg.webp",
      alt: "Dabba Masala 4",
    },
  ];

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        lazy={true}
        freeMode={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper); // Store the swiper instance
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              width={1000}
              height={500}
              src={slide.image}
              alt={slide.alt}
              className="w-full h-auto max-h-[400px]  object-cover rounded-lg "
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute z-10 p-3 text-gray-300 transition-all duration-300 transform -translate-y-1/2 bg-gray-600 rounded-full shadow-md custom-prev left-2 top-1/2 hover:scale-110 hover:shadow-lg opacity-45 hover:bg-lime-450 hover:text-gray-900"
      >
        <ChevronLeft />
      </button>
      <button
        ref={nextRef}
        className="absolute z-10 p-3 text-gray-300 transition-all duration-300 transform -translate-y-1/2 bg-gray-600 rounded-full shadow-md opacity-45 custom-next right-2 top-1/2 hover:scale-110 hover:shadow-lg hover:bg-lime-450 hover:text-gray-900"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default HeroCarousel;
