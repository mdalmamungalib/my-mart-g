import React from "react";
import WeeklySalesChart from "../WeeklySalesChart/WeeklySalesChart";
import BestSellingProductsChart from "../BestSellingProductsChart/BestSellingProductsChart";

const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <WeeklySalesChart />
      <BestSellingProductsChart />
    </div>
  );
};

export default DashboardCharts;
