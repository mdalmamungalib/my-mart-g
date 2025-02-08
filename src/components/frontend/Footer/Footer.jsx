"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({
  logoUrl = "https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg",
  companyLinks = [
    { name: "About", href: "#" },
    { name: "Features", href: "#" },
    { name: "Works", href: "#" },
    { name: "Career", href: "#" },
  ],
  helpLinks = [
    { name: "Customer Support", href: "#" },
    { name: "Delivery Details", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
  copyrightYear = new Date().getFullYear(),
}) => {
  return (
    <section className="py-10 bg-lime-900 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          {/* Logo and Social Media */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <Image width={150} height={40} src={logoUrl} alt="Company Logo" priority />
            <p className="text-base leading-relaxed text-gray-900 mt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>

            {/* Social Icons */}
            <ul className="flex items-center space-x-3 mt-9">
              {[
                { platform: "twitter", icon: "579", url: "#" },
                { platform: "facebook", icon: "547", url: "#" },
                { platform: "instagram", icon: "558", url: "#" },
                { platform: "github", icon: "609", url: "#" },
              ].map(({ platform, icon, url }) => (
                <li key={platform}>
                  <a
                    href={url}
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600"
                  >
                    <Image
                      width={16}
                      height={16}
                      src={`https://cdn-icons-png.flaticon.com/512/733/${icon}.png`}
                      alt={`${platform} icon`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>
            <ul className="mt-6 space-y-4">
              {companyLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} className="flex text-base text-black transition-all duration-200 hover:text-blue-600">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>
            <ul className="mt-6 space-y-4">
              {helpLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} className="flex text-base text-black transition-all duration-200 hover:text-blue-600">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>
            <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="block w-full p-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-6 py-4 mt-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />
        <p className="text-sm text-center text-gray-900">© {copyrightYear}, All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
