"use client";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TbCurrencyTaka } from "react-icons/tb";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/slices/cartSlice";
import toast from "react-hot-toast";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  function handleAddToCart() {
    dispatch(addToCart(product));
    toast.success(`${product.title} added Successfully`);
  }
  return (
    <div className="overflow-hidden bg-white border rounded-lg shadow-md group dark:bg-gray-800">
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
          <button
            onClick={() => handleAddToCart()}
            className="flex items-center gap-2 px-4 py-2 text-white transition rounded-md bg-lime-600 hover:bg-lime-700"
          >
            <ShoppingBag />
            <span className="hidden md:block">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
