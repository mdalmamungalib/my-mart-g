import React from "react";

const DateColumn = ({ row, accessorKey }) => {
  const createdAt = row.getValue(`${accessorKey}`);

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
};

export default DateColumn;
