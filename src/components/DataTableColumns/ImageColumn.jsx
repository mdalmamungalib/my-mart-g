import Image from "next/image";
import React from "react";

const ImageColumn = ({ row, accessorKey }) => {
  const imageUrl = row.getValue(`${accessorKey}`);

  return (
    <Image
      width={556}
      height={556}
      alt=""
      src={imageUrl}
      className="object-cover w-10 h-10 rounded-full"
    />
  );
};

export default ImageColumn;
