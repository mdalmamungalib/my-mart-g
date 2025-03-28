import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import Image from "next/image";
import { LayoutDashboard, LogOut, Settings } from "lucide-react";
import Galib from "../../../app/galib.png";

const UserAvatar = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          aria-label="Open user menu"
          className="flex items-center justify-center w-8 h-8 rounded-full focus:outline-none"
        >
          <Image
            src={Galib}
            alt={user?.name || "User Profile"}
            width={32}
            height={32}
            className="object-cover rounded-full"
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 p-2 bg-white border rounded-md shadow-lg dark:bg-gray-800">
        <DropdownMenuLabel className="text-sm font-medium">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button className="flex items-center space-x-2">
            <LayoutDashboard className="w-5 h-5 mr-2" />
            <span>Dashboard</span>
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="flex items-center space-x-2">
            <Settings className="w-5 h-5 mr-2" />
            <span>Edit Profile</span>
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="flex items-center space-x-2">
            <LogOut className="w-5 h-5 mr-2" />
            <span>Logout</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
