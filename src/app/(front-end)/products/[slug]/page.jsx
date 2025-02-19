import BreadCrumb from "components/frontend/BreadCrumb/BreadCrumb";
import CategoryCarousel from "components/frontend/Pages/CategoryCarousel";
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
    <div>
      <BreadCrumb />
      <div className="grid grid-cols-12 gap-4 py-6">
        <div className="col-span-3">
          <Image
            src={
              "https://images.pexels.com/photos/5638752/pexels-photo-5638752.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt="title"
            height={556}
            width={556}
            className="object-cover w-full"
          />
        </div>
        <div className="col-span-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Calibejia Squesi</h2>
            <button>
              <Share2 />
            </button>
          </div>

          <div className="gap-4 pt-4 border-b border-gray-400 ">
            <p className="py-4 text-xl ">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cumque excepturi nihil, sit dolores vitae
              dolorum.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <p>SKU: 232178547</p>
              <p className="px-2.5 py-1.5 rounded-full bg-lime-400 text-slate-700">
                <span className="font-bold text-slate-900">
                  Stock:
                </span>{" "}
                23217
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 pt-4">
            <div className="flex items-center gap-4 ">
              <h4 className="text-2xl">USD: $49</h4>
              <del className="text-sm">USD: $214</del>
            </div>
            <p className="flex items-center justify-center ">
              <Tag className="w-5 h-5 text-slate-400 me-2" />
              <span className="">Save 50% right now</span>
            </p>
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3 border border-gray-400 rounded-xl">
              <button className="px-4 py-2 border-r border-gray-400">
                <Minus />
              </button>
              <p className="px-4">2</p>
              <button className="px-4 py-2 border-l border-gray-400">
                <Plus />
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-white transition rounded-md bg-lime-600 hover:bg-lime-700">
              <BaggageClaim />
              <span className="hidden md:block">Add to card</span>
            </button>
          </div>
        </div>
        <div className="hidden h-auto col-span-3 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700 sm:block">
          <h2 className="sm:px-6 px-6 sm:py-4 py-2 font-semibold text-center border-b border-gray-200 text-[10px] sm:text-lg dark:border-gray-600 bg-slate-100 dark:bg-gray-800 dark:text-white">
            Delivery & Returns
          </h2>
          <div className="p-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-orange-500 rounded-lg text-slate-50 max-w-[185px]">
              <span>My Mart Express</span>
              <Send />
            </div>
            <div className="flex items-center gap-3 py-3 border-b border-slate-400 text-slate-100">
              <p>Eligible for Free Delivery</p>
              <Link href={"/"}>View Details</Link>
            </div>
            {/* form */}
            <div>
              <h2 className="py-2 text-xl text-slate-300">Chose your location</h2>

              <div className="border-b border-gray-400">
              <form class="max-w-sm mx-auto py-3">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  
                  <option value="US" selected>United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </form>
              </div>
              <div className="border-b border-gray-400">
              <form class="max-w-sm mx-auto py-3">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  
                  <option value="US" selected>United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </form>
              </div>
              <div className="">
              <form class="max-w-sm mx-auto py-3">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  
                  <option value="US" selected>United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700 sm:block">
        <h2 className="mb-4 ml-3 text-2xl font-semibold text-slate-200">
          Similar Products
        </h2>
        <CategoryCarousel products={category.products || []} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
