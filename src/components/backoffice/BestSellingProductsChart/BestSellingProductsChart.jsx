"use client"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const BestSellingProductsChart = () => {
  const data = {
    labels: ["Laptop", "Phone", "Computer Perse", "Others"],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 10, 20, 20],
        backgroundColor: [
          "#16a34a",
          "#2563eb",
          "#0ea5e8",
          "#ea580c",
        ],
        borderColor: [
          "#f0f3f2",
          "#f0f3f2",
          "#f0f3f2",
          "#f0f3f2",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="p-8 border rounded-lg dark:border-none dark:bg-slate-700 bg-slate-100 text-slate-800 dark:text-slate-50">
      <h2 className="mb-5 text-xl font-bold">
        Best Selling Products Chart
      </h2>
      <Pie data={data} className="w-14 h-14"/>
    </div>
  );
};

export default BestSellingProductsChart;
