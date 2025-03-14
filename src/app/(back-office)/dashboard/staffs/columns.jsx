"use client";

import { Checkbox } from "@/components/ui/checkbox";
import DateColumn from "components/DataTableColumns/DateColumn";
import SortableColumn from "components/DataTableColumns/SortableColumn";
import ActionColumn from "components/DataTableColumns/ActionColumn";
import ImageColumn from "components/DataTableColumns/ImageColumn";

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
    accessorKey: "name",
    header: ({ column }) => (
      <SortableColumn column={column} title="Name" />
    ),
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
      const staff = row.original;
      return (
        <ActionColumn
          row={row}
          title="Banner"
          editEndpoint={`staffs/update/${staff.id}`}
          endpoint={`staffs/${staff.id}`}
        />
      );
    },
  },
];
