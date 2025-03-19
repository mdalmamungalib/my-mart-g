import Link from 'next/link';
import { TbCurrencyTaka } from "react-icons/tb";
import React from 'react';

const CartSubTotalCart = ({subTotal}) => {
    return (
        <div className="h-auto p-6 border border-gray-200 rounded-lg shadow-md md:col-span-4 dark:bg-gray-700">
          <h2 className="py-3 text-2xl font-semibold">
            Cart Total
          </h2>
          <div className="flex justify-between py-3 border-b border-gray-300">
            <span>Subtotal</span>
            <span className="flex items-center">
              <TbCurrencyTaka className="w-5 h-5" />
              {subTotal}
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
    );
};

export default CartSubTotalCart;