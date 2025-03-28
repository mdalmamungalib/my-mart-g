"use client";

import { Checkbox } from "@/components/ui/checkbox";
import SortableColumn from "components/DataTableColumns/SortableColumn";
import ImageColumn from "components/DataTableColumns/ImageColumn";
import DateColumn from "components/DataTableColumns/DateColumn";
import ActionColumn from "components/DataTableColumns/ActionColumn";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <SortableColumn column={column} title="Title" />
    ),
  },
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => (
      <ImageColumn row={row} accessorKey="imageUrl" />
    ),
  },
  {
    accessorKey: "link",
    header: "Banner Link",
  },

  {
    accessorKey: "isActive",
    header: "Active",
  },
  {
    accessorKey: "createdAt",
    header: "Created Date",
    cell: ({ row }) => (
      <DateColumn row={row} accessorKey="createdAt" />
    ),
  },                              
  {
    id: "actions",
    cell: ({ row }) => {
      const banner = row.original;
      return (
        <ActionColumn
          row={row}
          title="Banner"
          editEndpoint={`banners/update/${banner.id}`}
          endpoint={`banners/${banner.id}`}
        />
      );
    },
  },
];
