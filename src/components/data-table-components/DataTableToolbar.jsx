"use client";

import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import DataTableViewOptions from "./DataTableViewOptions";

export function DataTableToolbar({ table, filterKeys }) {
  const isFiltered = filterKeys.some(
    (key) => table.getState().columnFilters[key]?.length > 0
  );

  const handleInputChange = (key, value) => {
    table.getColumn(key)?.setFilterValue(value);
  };

  const handleResetClick = () => {
    filterKeys.forEach((key) => {
      table.getColumn(key)?.setFilterValue('');
    });
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center flex-1 space-x-2">
        {filterKeys.map((key) => (
          <Input
            key={key}
            placeholder={`Filter ${key}...`}
            value={table.getColumn(key)?.getFilterValue() ?? ''}
            onChange={(event) => handleInputChange(key, event.target.value)}
            className="h-8 w-[150px] lg:w-[250px]"
          />
        ))}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={handleResetClick}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
