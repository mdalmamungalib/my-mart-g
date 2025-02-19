import BreadCrumb from "components/frontend/BreadCrumb/BreadCrumb";
import { Delete, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart = () => {
  return (
    <div>
      <BreadCrumb />
      <div className="grid grid-cols-12 gap-8 ">
        <div className="col-span-8">
          <h2 className="py-2 mb-6 text-lg font-semibold">
            Your Cart
          </h2>
          <div className="flex items-center justify-between py-2 text-sm font-semibold border-b border-slate-400 text-slate-300">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase">Quantity</h2>
            <h2 className="uppercase">Price</h2>
            <h2 className="uppercase"></h2>
          </div>
          <div className="">
            <div className="flex items-center justify-between py-2 text-sm font-semibold border-b border-slate-400 text-slate-300">
              <div className="flex items-center gap-3">
                <Image
                  width={259}
                  height={259}
                  src="https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="product Image"
                  className="object-cover w-20 h-20 rounded-xl"
                />
                <div className="flex flex-col">
                  <h2 className="text-sm font-semibold">
                    Product Name
                  </h2>
                  <small>Golden</small>
                </div>
              </div>
              <div className="flex items-center gap-3 border border-gray-400 rounded-xl">
                <button className="px-4 py-2 border-r border-gray-400">
                  <Minus />
                </button>
                <p className="px-4">2</p>
                <button className="px-4 py-2 border-l border-gray-400">
                  <Plus />
                </button>
              </div>
              <div className="">
                <h4>$259.00</h4>
              </div>
              <div className="">
                <button>
                  <Trash2 className="w-5 h-6 text-red-600" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-5">
              <form class=" mx-auto">
              <input type="text" id="coupon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter coupon code" required />
              </form>

              <button className="p-4 text-lg font-semibold bg-black rounded-lg text-slate-100">
                Apply coupon
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto col-span-4 p-6 overflow-hidden font-semibold bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700">
          <h2 className="py-3 text-2xl">Cart total</h2>
          <div className="flex justify-between py-3 border-b border-slate-400">
            <span>Subtotal </span>
            <span>$596 </span>
          </div>
          <div className="flex justify-between py-3">
            <span>Tax </span>
            <span>$0 </span>
          </div>
          <div className="flex justify-between py-3 ">
            <span>Shipping US </span>
            <span>$19 </span>
          </div>
          <p className="pb-3 font-normal border-b border-slate-400 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maiores, earum.
          </p>
          <div className="flex justify-between py-6 ">
            <span>Total </span>
            <span>$1000 </span>
          </div>
          <Link href={"/"}>
            <button className="w-full p-4 text-xl font-semibold text-center rounded-lg bg-slate-100 text-slate-900">
              Continue to payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
