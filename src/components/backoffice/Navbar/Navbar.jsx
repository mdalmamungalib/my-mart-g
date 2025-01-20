import {
  AlignJustify,
  Bell,
  LayoutDashboard,
  LogOut,
  Settings,
  Sun,
  X,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Galib from "../../../app/galib.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import ThemeSwitcherBtn from "../../../components/ThemeSwitcherBtn/ThemeSwitcherBtn";

const Navbar = ({ setShowSideBar, showSidebar }) => {
  return (
    <div className="flex items-center justify-between bg-slate-100 dark:bg-[#122136] h-16 z-50 px-8 py-8 fixed w-full text-lime-600">
      {/* icon */}
      <button className="" onClick={() => setShowSideBar(!showSidebar)}>
        <AlignJustify />
      </button>
      
      {/* 3 icon */}
      <div className="flex space-x-3 sm:pr-56">
        <DropdownMenu>
          <ThemeSwitcherBtn />

          <DropdownMenuTrigger>
            <button
              type="button"
              className="relative flex items-center p-2 space-x-1 text-xl transition-transform duration-200 transform border-none rounded-md w-fit active:scale-110 text-lime-600 hover:scale-110 dark:hover:text-lime-400"
            >
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 text-xs font-bold text-white -translate-y-1 bg-red-500 rounded-full -translate-x-0 ">
                20
              </div>
              <Bell />
              <span className="sr-only">Notifications</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="pl-4 pr-10">
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src={Galib}
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full "
                />
                <div className="flex flex-col">
                  <p>Yellow Sweet Corn Stock out,</p>
                  <div className="flex items-center py-1 space-x-2">
                    <p className="px-2 py-1 text-white bg-red-700 rounded-full">
                      Stock Out
                    </p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <Settings className="w-4 h-4 mr-2" />
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LogOut className="w-4 h-4 mr-2" />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button>
              <Image
                src={Galib}
                alt="User Profile"
                width={200}
                height={200}
                className="w-8 h-8 rounded-full "
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="pl-4 pr-28">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LayoutDashboard className="w-4 h-4 mr-2" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <Settings className="w-4 h-4 mr-2" />
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LogOut className="w-4 h-4 mr-2" />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
