"use client";

import { Checkbox } from "@/components/ui/checkbox";
import DateColumn from "components/DataTableColumns/DateColumn";
import ImageColumn from "components/DataTableColumns/ImageColumn";
import SortableColumn from "components/DataTableColumns/SortableColumn";
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
  // {
  //   accessorKey: "description",
  //   header: "description",
  //   cell: ({ row }) => {
  //     const description = row.getValue("description");
  //     return <div className="line-clamp-1">{description}</div>;
  //   },
  // },

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
      const category = row.original;
      return (
        <ActionColumn
          row={row}
          title="Category"
          endpoint={`categories/${category.id}`}
        />
      );
    },
  },
];
