import BreadCrumb from "components/frontend/BreadCrumb/BreadCrumb";
import { Share2 } from "lucide-react";
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

          <p className="py-4 text-xl border-b border-gray-500">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cumque excepturi nihil, sit dolores vitae dolorum.
          </p>
          <p>SKU: 232178547</p>
          <div className="flex items-center gap-4">
            <h4 className="text-2xl">$49</h4>
            <del className="text-sm">$214</del>
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
