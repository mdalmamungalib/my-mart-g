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
    <div className="flex items-center justify-between bg-slate-100 dark:bg-[#122136] h-16 z-50 px-8 py-8 fixed w-full text-[#04bd7f]">
      {/* icon */}
      <button onClick={() => setShowSideBar(!showSidebar)}>
        <AlignJustify />
      </button>
      {/* 3 icon */}
      <div className="flex space-x-3 sm:pr-56">
        <ThemeSwitcherBtn />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent "
            >
              <Bell className="text-[#04bd7f]" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 ">
                20
              </div>
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
