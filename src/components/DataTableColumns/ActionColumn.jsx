import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { MoreHorizontal } from "lucide-react";
import DeleteBtn from "components/Actions/DeleteBtn";

const ActionColumn = ({ row, title, endpoint }) => {
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
        {/* <DropdownMenuItem
            onClick={() =>
              navigator.clipboard.writeText(isActive)
            }
          >
            Copy the status
          </DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <DeleteBtn title={title} endpoint={endpoint}/>
        </DropdownMenuItem>
        <DropdownMenuItem>Edit {title}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionColumn;
