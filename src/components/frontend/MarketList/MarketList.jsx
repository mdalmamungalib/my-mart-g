import React from "react";

import { getData } from "lib/getData";
import MarketCarousel from "../Pages/MarketCarousel";

const MarketList = async () => {
  const markets = await getData("markets");
  return (
    <div className="p-4 rounded-lg bg-slate-100 dark:bg-lime-900">
      <h1 className="relative py-2 mb-4 text-2xl font-semibold text-center dark:text-slate-50 text-slate-900">
        Sop By Market
      </h1>
      <div className="">
        <MarketCarousel markets={markets} />
      </div>
    </div>
  );
};

export default MarketList;
