"use client";
import React from "react";
import { Carousel } from "nuka-carousel";
import { easeCircleOut, easeElasticOut } from "d3-ease";
import Image from "next/image";

const HeroCarousel = () => {
  const carousels = [
    { id: 1, image: "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=" },
    { id: 2, image: "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=" },
    { id: 3, image: "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=" },
  ];

  return (
    <Carousel
      autoplay
      wrapAround
      animation="fade"
      autoplayInterval={3000}
      pauseOnHover
      easing={easeCircleOut}
      edgeEasing={easeElasticOut}
      defaultControlsConfig={{
        containerClassName: "relative w-full max-w-screen-xl mx-auto",
        nextButtonText: "→",
        prevButtonText: "←",
        pagingDotsStyle: { fill: "limegreen" },
      }}
    >
      {carousels.map((carousel) => (
        <div key={carousel.id}>
          <Image
            src={carousel.image}
            alt={`Slide ${carousel.id}`}
            width={1000}
            height={500}
            className="object-cover w-full h-[300px] rounded-lg"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
