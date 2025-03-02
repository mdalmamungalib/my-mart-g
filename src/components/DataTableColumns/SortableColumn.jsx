import { Button } from '@/components/ui/button';
import { ArrowUpDown } from "lucide-react";
import React from 'react';

const SortableColumn = ({column, title}) => {
    return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {title}
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      )
};

export default SortableColumn;