import Link from "next/link";
import React from "react";

const EmptyCart = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[60vh] bg-cover bg-center p-6 rounded-lg"
      style={{
        backgroundImage: `url('https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2023/09/Lakehouse_16_9_001-1-1-1.webp')`,
      }}
    >
      <div className="flex flex-col items-center p-8 space-y-4 text-center shadow-lg bg-white/80 dark:bg-black/70 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-white">
          Your Cart is Empty 🛒
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Looks like you haven't added anything yet.
        </p>
        <Link
          href="/"
          className="px-6 py-3 text-lg font-semibold text-white transition rounded-lg bg-lime-600 hover:bg-lime-700"
        >
          Start Shopping
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
