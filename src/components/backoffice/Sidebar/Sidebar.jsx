"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../app/Logo.svg";
import {
  LayoutDashboard,
  Slack,
  Users2,
  Store,
  Settings,
  Radar,
  LogOut,
  ChevronRight,
  Minus,
  ChevronDown,
  Truck,
  Building2,
  BookUser,
  CircleUser,
} from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Sidebar = ({ showSidebar }) => {
  const pathname = usePathname();
  const sidebarLinks = [
    {
      title: "Customers",
      link: "/dashboard/customers",
      icons: Users2,
    },
    {
      title: "Markets",
      link: "/dashboard/markets",
      icons: Store,
    },
    {
      title: "Sellers",
      link: "/dashboard/sellers",
      icons: CircleUser,
    },
    {
      title: "Orders",
      link: "/dashboard/orders",
      icons: Truck,
    },
    {
      title: "Our Staff",
      link: "/dashboard/staff",
      icons: BookUser,
    },
    {
      title: "Mart Community",
      link: "/dashboard/community",
      icons: Building2,
    },
    {
      title: "Settings",
      link: "/dashboard/settings",
      icons: Settings,
    },

    {
      title: "Online Store",
      link: "/dashboard/onlinestore",
      icons: Radar,
    },
  ];

  const catalogDropdown = [
    {
      title: "Products",
      link: "/dashboard/products",
    },
    {
      title: "Categories",
      link: "/dashboard/categories",
    },
    {
      title: "Coupons",
      link: "/dashboard/coupons",
    },
    {
      title: "Store Banners",
      link: "/dashboard/banners",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className={
        showSidebar
          ? "dark:bg-[#122136]  bg-slate-100 space-y-6 w-60 h-full dark:text-teal-50 text-slate-800 pt-0 fixed left-0 top-0 sm:block overflow-y-scroll"
          : "dark:bg-[#122136]  bg-slate-100 space-y-6 w-60 h-full dark:text-teal-50 text-slate-800 pt-0 fixed left-0 top-0 hidden sm:block overflow-y-scroll"
      }
    >
      <Link
        className="flex items-center justify-center mt-10 mb-0 sm:mt-0"
        href={"/"}
      >
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="Logo"
          className="w-40 h-32 mb-0 sm:-mt-8"
        />
      </Link>
      <div className="flex flex-col space-y-3 ">
        <Link
          onClick={() => showSidebar(false)}
          href={"/dashboard"}
          className={
            pathname === "/dashboard"
              ? "flex items-center px-6 py-2 space-x-3 border-l-4 border-green-600 rounded text-[#04bd7f]"
              : "flex items-center px-6 py-2 space-x-3"
          }
        >
          {" "}
          <LayoutDashboard />
          <span>Dashboard</span>
        </Link>
        {/* Catalogue */}

        <Collapsible className="px-6 ">
          <CollapsibleTrigger
            onClick={() => setOpenMenu(!openMenu)}
          >
            <button className={"flex items-center py-2 space-x-6"}>
              <div className="flex items-center space-x-3">
                <Slack />
                <span>Catalogue</span>
              </div>
              {openMenu === false ? (
                <ChevronRight />
              ) : (
                <ChevronDown />
              )}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-3 py-3 pl-6 rounded-md dark:bg-slate-900 bg-slate-200">
            {catalogDropdown.map((item, index) => {
              return (
                <Link
                  onClick={() => showSidebar(false)}
                  key={index}
                  href={item?.link}
                  className={
                    item?.link === pathname
                      ? "flex items-center space-x-3 dark:text-white text-slate-400"
                      : "flex items-center space-x-3 text-slate-700 text-sm  hover:text-slate-400 dark:hover:text-white"
                  }
                >
                  <Minus />
                  <span>{item?.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {sidebarLinks.map((item, index) => {
          const Icon = item?.icons;
          return (
            <Link
              onClick={() => showSidebar(false)}
              key={index}
              href={item?.link}
              className={
                item?.link === pathname
                  ? "flex items-center px-6 py-2 space-x-3 border-l-4 border-green-600 rounded text-[#04bd7f]"
                  : "flex items-center px-6 py-2 space-x-3"
              }
            >
              {" "}
              <Icon />
              <span>{item?.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <button className="flex items-center justify-center px-14 py-3 bg-[#04bd7f] rounded-xl space-x-2">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
