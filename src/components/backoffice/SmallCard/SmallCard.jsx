import React from 'react';
import SmallCards from '../SmallCards/SmallCards';
import { Loader2, PackageCheck, RefreshCcw, ShoppingCart } from 'lucide-react';

const SmallCard = () => {
    const orderStatus = [
      {
        title: "Total Order",
        sales: 552,
        iconBg: "bg-orange-600",
        icon: ShoppingCart
      },
      {
        title: "Orders Pending",
        sales: 185,
        llb: 120350.31,
        iconBg: "bg-blue-600",
        icon: Loader2
      },
      {
        title: "Orders Processing",
        sales: 45,
        iconBg: "bg-green-600",
        icon: RefreshCcw
      },
      {
        title: "Orders Delivered",
        sales: 306,
        iconBg: "bg-green-700",
        icon: PackageCheck
      },
      
    ];
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {orderStatus.map((item, i) => (
          <SmallCards
            key={i}
            data={item}
          />
        ))}
      </div>
    );
  };

export default SmallCard;