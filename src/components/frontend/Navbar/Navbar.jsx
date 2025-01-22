import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Logo from "app/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import {  ShoppingCart, User } from "lucide-react";
import ThemeSwitcherBtn from "components/ThemeSwitcherBtn/ThemeSwitcherBtn";
import HelpModal from "../HelpModal/HelpModal";

const Navbar = () => {
  return (
    <nav className="bg-gray-50 dark:bg-slate-800">
      <div className="flex items-center justify-between gap-8 p-4 mx-auto max-w-screen-2xl">
        {/* Logo Section */}
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center justify-center transition-transform transform hover:scale-110"
        >
          <Image
            src={Logo}
            width={100}
            height={100}
            alt="Logo"
            className="w-32"
          />
        </Link>

        {/* Search Section */}
        <div className="flex-grow max-w-lg mx-auto sm:max-w-none">
          <SearchForm />
        </div>

        {/* Actions Section */}
        <div className="flex gap-6">
          {/* Login */}
          <Link
            href="/login"
            className="flex items-center space-x-1 text-xl transition-transform transform text-lime-600 hover:scale-110 dark:hover:text-lime-400"
            aria-label="Login"
          >
            <User />
            <span>Login</span>
          </Link>

          {/* Help */}
          
          <HelpModal/>

          {/* Cart */}
          <Link
            href="/dashboard"
            className="relative flex items-center text-xl transition-transform transform text-lime-600 hover:scale-110 dark:hover:text-lime-400"
            aria-label="Cart"
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="sr-only">Cart</span>
            {/* Badge */}
            <div className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 text-xs font-bold text-white translate-x-3 -translate-y-4 bg-red-500 rounded-full animate-pulse">
              20
            </div>
          </Link>
        </div>

        {/* Theme Switcher */}
        <ThemeSwitcherBtn />
      </div>
    </nav>
  );
};

export default Navbar;
