"use client";
import BreadCrumb from "components/frontend/BreadCrumb/BreadCrumb";
import CartProduct from "components/frontend/CartProduct/CartProduct";
import CartSubTotalCart from "components/frontend/Pages/CartSubTotalCart";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { useSelector } from "react-redux";

const Cart = () => {
  const pathname = usePathname();
  const cartItems = useSelector((store) => store.cart);
  const subTotal = cartItems.reduce((acc, currentItem) => {
   return acc + currentItem.salePrice * currentItem.qty;
  },0).toFixed(2) ?? 0;
  console.log(cartItems);
  
  // Convert pathname to breadcrumb items
  const pathSegments = pathname.split("/").filter((segment) => segment);
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    return {
      label: segment.charAt(0).toUpperCase() + segment.slice(1), 
      href,
      current: index === pathSegments.length - 1, 
    };
  });
  return (
    <div className="container mx-auto">
      <BreadCrumb items={breadcrumbItems}/>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Cart Items Section */}
        <div className="md:col-span-8">
          <h2 className="py-2 mb-4 text-lg font-semibold">
            Your Cart
          </h2>

          <CartProduct cartItems={cartItems} />

          {/* Coupon Section */}
          <div className="flex flex-col items-center gap-3 pt-6 md:flex-row">
            <input
              type="text"
              id="coupon"
              className="w-full max-w-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              placeholder="Enter coupon code"
              required
            />
            <button className="w-full px-6 py-3 text-lg font-semibold text-white transition bg-black rounded-lg md:w-auto hover:bg-gray-900 md:text-base ">
              Apply Coupon
            </button>
          </div>
        </div>

        {/* Order Summary Section */}
        <CartSubTotalCart subTotal={subTotal}/>
      </div>
    </div>
  );
};

export default Cart;
