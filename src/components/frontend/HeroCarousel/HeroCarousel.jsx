"use client";
import React from "react";
import { Carousel } from "nuka-carousel"; // Ensure this is correctly imported
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
      alt: "Dabba Masala",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/9609834/pexels-photo-9609834.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Pexels Food",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
      alt: "Dabba Masala 2",
    },
  ];

  return (
    <Carousel
      autoplay={true}
      showArrows={true}
      autoplayInterval={3000}
      wrapMode="wrap"
      className="overflow-hidden rounded-lg shadow-lg h-[400px]"
    >
      {slides.map((slide) => (
        <Image
          key={slide.id}
          src={slide.image}
          alt={slide.alt}
          width={800}
          height={300}
          className="object-cover w-full h-auto"
        />
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
