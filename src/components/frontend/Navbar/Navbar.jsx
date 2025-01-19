import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Logo from "app/Logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="shadow-md bg-gray-50">
      <div className="flex items-center justify-between gap-8 mx-auto max-w-7xl">
        {/* Logo Section */}
        <Link
          className="flex items-center justify-center transition-transform transform hover:scale-105"
          href={"/"}
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
      </div>
    </div>
  );
};

export default Navbar;
