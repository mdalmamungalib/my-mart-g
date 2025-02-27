"use client";

import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react"
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns = [
  
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      )
    },
  },
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("imageUrl");

      return (
        <Image
          width={556}
          height={556}
          alt=""
          src={imageUrl}
          className="object-cover w-10 h-10 rounded-full"
        />
      );
    },
  },
  
  {
    accessorKey: "isActive",
    header: "Active",
  },
  {
    accessorKey: "createdAt",
    header: "Created Date",
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt");

      const originalDate = new Date(createdAt);
      const date = originalDate.getDate();
      const month = originalDate.toLocaleString("default", {
        month: "short",
      });
      const year = originalDate.getFullYear();

      const formattedDate = `${date}th ${month} ${year}`;

      return (
        <span className="text-sm text-gray-500">
          {formattedDate}
          {/* {new Date(createdAt).toLocaleDateString()} */}
        </span>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const isActive = row.isActive;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="w-4 h-4" />
            </Button>

           
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(isActive)
              }
            >
              Copy the status
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete Category</DropdownMenuItem>
            <DropdownMenuItem>Edit Category</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
