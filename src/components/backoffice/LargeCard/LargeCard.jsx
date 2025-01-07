import React from "react";
import LargeCards from "../LargeCards/LargeCards";

const LargeCard = () => {
  const orderStatus = [
    {
      period: "Today Orders",
      sales: 110000,
      color: "bg-green-600",
    },
    {
      period: "Yesterday Orders",
      sales: 130000,
      color: "bg-blue-600",
    },
    {
      period: "This Month",
      sales: 190000,
      color: "bg-orange-600",
    },
    {
      period: "All-Time Sales",
      sales: 140000,
      color: "bg-purple-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {orderStatus.map((item, i) => (
        <LargeCards
          key={i}
          data={item}
        />
      ))}
    </div>
  );
};

export default LargeCard;
