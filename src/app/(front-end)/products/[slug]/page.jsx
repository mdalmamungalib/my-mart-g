import BreadCrumb from "components/frontend/BreadCrumb/BreadCrumb";
import { Minus, Plus, Share2, Tag } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductDetailPage = ({ params: { slug } }) => {
  return (
    <div>
      {/* <BreadCrumb/> */}
      <div className="grid grid-cols-12 gap-4">
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

          <div className="gap-4 pt-4 border-b border-gray-500 ">
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
          <div className="mt-4">
            <div className="flex items-center gap-3 rounded-xl">
              <button className="flex items-center gap-2 px-4 py-2 text-white transition rounded-md bg-lime-600 hover:bg-lime-700">
                <Minus />
              </button>
              <p>2</p>
              <button className="flex items-center gap-2 px-4 py-2 text-white transition rounded-md bg-lime-600 hover:bg-lime-700">
                <Plus />
              </button>
            </div>
          </div>
        </div>
        <div className="hidden h-auto col-span-3 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700 sm:block">
          <h2 className="sm:px-6 px-6 sm:py-4 py-2 font-semibold text-center border-b border-gray-200 text-[10px] sm:text-lg dark:border-gray-600 bg-slate-100 dark:bg-gray-800 dark:text-white">
            Shop By Category
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
