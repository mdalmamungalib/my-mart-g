"use client";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const WeeklySalesChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const tabs = [
    {
      title: "Sales",
      type: "sales",
      data: {
        labels,
        datasets: [
          {
            label: "Sales",
            data: labels.map(() =>
              faker.number.int({ min: -1000, max: 1000 })
            ),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      },
    },
    {
      title: "Orders",
      type: "orders",
      data: {
        labels,
        datasets: [
          {
            label: "Orders",
            data: labels.map(() =>
              faker.number.int({ min: -1000, max: 1000 })
            ),
            borderColor: "rgb(0, 137, 132)",
            backgroundColor: "rgba(0, 137, 132, 0.5)",
          },
        ],
      },
    },
  ];

  const [cartTodDisplay, setCartTodDisplay] = useState(
    tabs[0].type
  );
  return (
    <div className="p-8 border rounded-lg dark:border-none dark:bg-slate-700 bg-slate-100 text-slate-800 dark:text-slate-50">
      <h2 className="mb-4 text-xl font-bold">Weekly Charts</h2>
      {/* Tabs */}

      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-500 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab, i) => {
            return (
              <li key={i} className="me-2">
                <button
                  onClick={() => setCartTodDisplay(tab?.type)}
                  className={
                    cartTodDisplay === tab?.type
                      ? "inline-block p-4 text-[#f87417] border-b-2 border-[#f87417] rounded-t-lg active dark:text-[#f87417] dark:border-[#f87417]"
                      : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-green-600 hover:border-green-600 dark:hover:text-green-600"
                  }
                >
                  {tab?.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Content to display */}
      {tabs.map((tab, i) => {
        if (cartTodDisplay === tab?.type) {
          return <Line key={i} options={options} data={tab?.data} />;
        }
        return null;
      })}
    </div>
  );
};

export default WeeklySalesChart;
