import BreadCrumb from "components/frontend/BreadCrumb/BreadCrumb";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const Cart = () => {
  return (
    <div className="container mx-auto">
      <BreadCrumb />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Cart Items Section */}
        <div className="md:col-span-8">
          <h2 className="py-2 mb-4 text-lg font-semibold">Your Cart</h2>

          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full border border-collapse border-gray-300">
              <thead>
                <tr className="text-gray-700 bg-gray-100">
                  <th className="p-3 text-left">Product</th>
                  <th className="p-3 text-center md:pl-16">Quantity</th>
                  <th className="p-3 text-center">Price</th>
                  <th className="p-3 text-center">Total</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="flex items-center gap-4 p-3">
                    <Image
                      width={80}
                      height={80}
                      src="https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Product Image"
                      className="object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="text-sm font-semibold">Product Name</h2>
                      <small className="text-gray-500">Golden</small>
                    </div>
                  </td>
                  <td className="p-3 text-center md:pl-16">
                    <div className="inline-flex items-center border rounded-lg">
                      <button className="px-3 py-2 border-r hover:bg-gray-200 md:px-2 hover:rounded-l-lg dark:hover:text-slate-800">
                        <Minus className="w-5 h-5" />
                      </button>
                      <p className="px-4 ">2</p>
                      <button className="px-3 py-2 border-l hover:bg-gray-200 md:px-2 hover:rounded-r-lg dark:hover:text-slate-800">
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <div className="flex items-center justify-center">
                      <TbCurrencyTaka className="w-5 h-5" /> 500.25
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <div className="flex items-center justify-center">
                      <TbCurrencyTaka className="w-5 h-5" /> 1000.50
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <button>
                      <Trash2 className="w-5 h-5 text-red-600 hover:text-red-800" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile View (Cards) */}
          <div className="space-y-4 md:hidden">
            <div className="flex flex-col gap-3 p-4 border rounded-lg shadow-sm">
              {/* Product Info */}
              <div className="flex gap-4">
                <Image
                  width={80}
                  height={80}
                  src="https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Product Image"
                  className="object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-sm font-semibold">Product Name</h2>
                  <small className="text-gray-500">Golden</small>
                </div>
              </div>

              {/* Quantity & Price */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center border rounded-lg">
                  <button className="px-3 py-2 border-r hover:bg-gray-200 hover:rounded-l-lg dark:hover:text-slate-800">
                    <Minus className="w-5 h-5" />
                  </button>
                  <p className="px-4">2</p>
                  <button className="px-3 py-2 border-l hover:bg-gray-200 hover:rounded-r-lg dark:hover:text-slate-800">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <p className="flex items-center font-medium">
                  <TbCurrencyTaka className="w-5 h-5" /> 500.25
                </p>
              </div>

              {/* Total Price & Remove */}
              <div className="flex items-center justify-between">
                <p className="flex items-center text-lg font-semibold">
                  <TbCurrencyTaka className="w-5 h-5" /> 1000.50
                </p>
                <button>
                  <Trash2 className="w-5 h-5 text-red-600 hover:text-red-800" />
                </button>
              </div>
            </div>
          </div>

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
        <div className="h-auto p-6 border border-gray-200 rounded-lg shadow-md md:col-span-4 dark:bg-gray-700">
          <h2 className="py-3 text-2xl font-semibold">Cart Total</h2>
          <div className="flex justify-between py-3 border-b border-gray-300">
            <span>Subtotal</span>
            <span className="flex items-center">
              <TbCurrencyTaka className="w-5 h-5" />
              214
            </span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-300">
            <span>Tax</span>
            <span className="flex items-center">
              <TbCurrencyTaka className="w-5 h-5" />
              14
            </span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-300">
            <span>Shipping</span>
            <span className="flex items-center">
              <TbCurrencyTaka className="w-5 h-5" />
              18
            </span>
          </div>
          <div className="flex justify-between py-6 text-lg font-semibold">
            <span>Total</span>
            <span className="flex items-center">
              <TbCurrencyTaka className="w-5 h-5" />
              214
            </span>
          </div>
          <Link href={"/"}>
            <button className="w-full py-4 text-xl font-semibold text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 md:text-base ">
              Continue to Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
