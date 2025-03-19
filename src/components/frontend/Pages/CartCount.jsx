"use client"
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const CartCount = () => {
    const cartItems = useSelector((store) => store.cart)
    return (
        <Link
            href="/cart"
            className="relative flex items-center text-[clamp(0.875rem,2vw,1rem)] transition-transform transform text-lime-600 hover:scale-105 dark:hover:text-lime-400"
            aria-label="Cart"
          >
            <ShoppingCart className="w-6 h-6 md:w-7 md:h-7" />
            <span className="sr-only">Cart</span>
            {/* Badge */}
            <div className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white translate-x-2 -translate-y-2 bg-red-500 rounded-full animate-pulse md:w-6 md:h-6 md:text-sm">
              {cartItems.length}
            </div>
          </Link>
    );
};

export default CartCount;