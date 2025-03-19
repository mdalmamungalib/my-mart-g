"use client";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Logo from "app/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import ThemeSwitcherBtn from "components/ThemeSwitcherBtn/ThemeSwitcherBtn";
import HelpModal from "../HelpModal/HelpModal";
import CartCount from "../Pages/CartCount";

const Navbar = () => {
  return (
    <nav className=" bg-gray-50 dark:bg-slate-800">
      <div className="flex items-center justify-between w-full gap-4 px-4 mx-auto max-w-screen-2xl sm:px-6 md:px-8">
        {/* Logo Section */}
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center justify-center transition-transform transform hover:scale-105"
        >
          <Image
            src={Logo}
            width={180}
            height={100}
            alt="Logo"
            className="max-w-[clamp(120px, 20vw, 180px)] max-h-[clamp(60px, 10vw, 100px)]"
          />
        </Link>

        {/* Search Section (Hidden on Small, Visible on Medium+) */}
        <div className="hidden w-full md:block">
          <SearchForm />
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Login */}
          <Link
            href="/login"
            className="flex items-center space-x-1 text-[clamp(0.875rem,2vw,1rem)] font-medium transition-transform transform text-lime-600 hover:scale-105 dark:hover:text-lime-400"
            aria-label="Login"
          >
            <User className="w-5 h-5 md:w-6 md:h-6" />
            <span>Login</span>
          </Link>

          {/* Help */}
          <HelpModal />

          {/* Cart */}
          <CartCount />

          {/* Theme Switcher */}
          <ThemeSwitcherBtn />
        </div>
      </div>

      {/* Search Bar (Visible on Small Screens, Hidden on Medium+) */}
      <div className="block w-full px-4 pb-3 mx-auto md:hidden">
        <SearchForm />
      </div>
    </nav>
  );
};

export default Navbar;
