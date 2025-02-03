import React from "react";
import MarketCarousel from "../MarketCarousel/MarketCarousel";

const MarketList = () => {
  return (
    <div>
      
      <div className="p-4 rounded-lg bg-slate-100 dark:bg-lime-900">
      <h1 className="py-2 mb-4 text-2xl font-semibold text-center dark:text-slate-50 text-slate-900">Sop By Market</h1>
      <MarketCarousel />
      </div>
    </div>
  );
};

export default MarketList;
