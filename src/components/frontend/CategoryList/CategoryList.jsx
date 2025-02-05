import Link from "next/link";
import React from "react";
import CategoryCarousel from "../Pages/CategoryCarousel";


const CategoryList = () => {
  const categories = [
    {
      id: 1,
      name: "Masala",
      image:
        "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
      description:
        "Authentic Indian masalas to spice up your meals.",
    },
    {
      id: 2,
      name: "Snacks",
      image:
        "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
      description:
        "Crunchy and delicious snacks for every occasion.",
    },
    {
      id: 3,
      name: "Beverages",
      image:
        "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
      description: "Refreshing beverages for a healthy lifestyle.",
    },
    {
      id: 4,
      name: "Groceries",
      image:
        "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
      description:
        "Daily essentials and groceries at the best prices.",
    },
    {
      id: 5,
      name: "Fruits & Vegetables",
      image:
        "https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k=",
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
    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800 lg:max-h-[400px]  md:max-h-[265px]">
      <div className="sm:px-6 px-6 sm:py-4 py-2 font-semibold text-center border-b border-gray-200 text-[10px] sm:text-lg dark:border-gray-600 bg-slate-100 dark:bg-gray-700 dark:text-white flex justify-between items-center">
        <h2>Shop By Category</h2>
        <Link
          href="/"
          className="px-4 py-2 transition-all rounded-md bg-lime-700 hover:bg-lime-600 text-slate-50"
        >
          See All
        </Link>
      </div>
      <div className="px-4 py-2">
        <CategoryCarousel/>
      </div>
    </div>
  );
};

export default CategoryList;
