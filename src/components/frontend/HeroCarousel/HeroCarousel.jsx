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
import Link from "next/link";

const HeroCarousel = ({ banners }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="relative w-full group">
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
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Link href={banner.link}>
            <Image
              width={1000}
              height={500}
              src={banner.imageUrl}
              alt={banner.title}
              className="w-full h-auto max-h-[400px]  object-cover rounded-lg "
              loading="lazy"
            />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute z-10 p-1 text-gray-300 transition-all duration-300 transform -translate-y-1/2 bg-gray-600 rounded-full shadow-md opacity-0 sm:p-3 custom-prev left-4 sm:left-2 top-1/2 group-hover:opacity-45 hover:scale-110 hover:shadow-lg hover:bg-lime-500 hover:text-gray-900"
      >
        <ChevronLeft className="sm:size-4 size-3" />
      </button>
      <button
        ref={nextRef}
        className="absolute z-10 p-1 text-gray-300 transition-all duration-300 transform -translate-y-1/2 bg-gray-600 rounded-full shadow-md opacity-0 sm:p-3 custom-next right-4 sm:right-2 top-1/2 group-hover:opacity-45 hover:scale-110 hover:shadow-lg hover:bg-lime-500 hover:text-gray-900"
      >
        <ChevronRight className="sm:size-4 size-3" />
      </button>
    </div>
  );
};

export default HeroCarousel;
