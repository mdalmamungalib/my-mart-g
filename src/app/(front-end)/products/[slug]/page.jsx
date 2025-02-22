import BreadCrumb from "components/frontend/BreadCrumb/BreadCrumb";
import CategoryCarousel from "components/frontend/Pages/CategoryCarousel";
import DeliveryReturns from "components/frontend/Pages/DeliveryReturns";
import { TbCurrencyTaka } from "react-icons/tb";
import { getData } from "lib/getData";
import {
  BaggageClaim,
  Minus,
  Plus,
  Send,
  Share2,
  Tag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductDetailPage = async ({ params: { slug } }) => {
  const category = await getData(
    "/categories/67af1276072781481fdcfae7"
  );

  return (
    <div className="container py-6 mx-auto">
      {/* Breadcrumb */}
      <BreadCrumb />

      {/* Product Section */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Product Image */}
        <div className="md:col-span-12 lg:col-span-4 xl:col-span-4">
          <Image
            src="https://images.pexels.com/photos/5638752/pexels-photo-5638752.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product Image"
            height={556}
            width={556}
            className="object-cover w-full rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="md:col-span-12 lg:col-span-5 xl:col-span-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Calibejia Squesi</h2>
            <button className="p-2 transition bg-gray-200 rounded-full hover:bg-gray-300 text-slate-900">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Product Info */}
          <p className="py-4 text-lg text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm text-gray-600">SKU: 232178547</p>
            <span className="px-3 py-1 text-xs font-semibold text-gray-800 rounded-full bg-lime-400">
              Stock: 23217
            </span>
          </div>

          {/* Pricing */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <div className="flex items-center gap-3">
              <h4 className="flex items-center text-2xl font-bold text-gray-900 dark:text-gray-100">
                <TbCurrencyTaka />
                49
              </h4>
              <del className="flex items-center text-sm text-gray-500">
                <span className="flex items-center">
                  <TbCurrencyTaka className="w-4 h-4" /> 214
                </span>
              </del>
            </div>
            <p className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <Tag className="w-5 h-5 text-gray-400 me-2" />
              Save 50% right now
            </p>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4">
            <div className="flex items-center border border-gray-400 rounded-xl">
              <button className="px-4 py-2 border-r border-gray-400 rounded-l-xl hover:bg-gray-200">
                <Minus />
              </button>
              <p className="px-4">2</p>
              <button className="px-4 py-2 border-l border-gray-400 rounded-r-xl hover:bg-gray-200">
                <Plus />
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-white transition rounded-md bg-lime-600 hover:bg-lime-700">
              <BaggageClaim />
              <span className="hidden md:block">Add to Cart</span>
            </button>
          </div>
        </div>

        {/* Delivery & Returns (Now Stacks on Medium Screens) */}
        <div className="md:col-span-12 lg:col-span-3 xl:col-span-3">
          <DeliveryReturns />
        </div>
      </div>

      {/* Similar Products */}
      <div className="p-4 mt-8 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700">
        <h2 className="mb-4 ml-3 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Similar Products
        </h2>
        <CategoryCarousel products={category.products || []} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
