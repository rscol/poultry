import React, { useState } from "react";
import MainCard from "./MainCard";
import ChartCard from "./Charts";
import { AiOutlineFire } from "react-icons/ai";
import { BsLightningFill } from "react-icons/bs";
import { FaExclamationTriangle, FaLightbulb } from "react-icons/fa";

const Dashboard = () => {
  const [barChartData, setBarChartData] = useState({
    series: [{ data: [400, 430, 448, 470, 540, 580, 690] }],
    chart: { type: "bar", height: 350 },
    plotOptions: {
      bar: { borderRadius: 4, horizontal: false, columnWidth: "40%" },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
  });

  const [areaChartData, setAreaChartData] = useState({
    series: [
      { name: "Current", data: [2, 1, 4, 7, 3, 2, 1] },
      { name: "Voltage", data: [12, 8, 7, 8, 5, 10, 4] },
      { name: "Wattage", data: [1, 3, 4, 6, 8, 7, 9] },
    ],
    chart: { height: 350, type: "area", toolbar: { show: false } },
    colors: ["blue", "green", "yellow"],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" },
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    markers: { size: 0 },
    tooltip: { shared: true, intersect: false },
  });

  return (
    <main className="main-container overflow-y-auto px-4 py-2 md:px-10 lg:px-20 2xl:px-48">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        <MainCard
          title="Energy Savings"
          icon={<BsLightningFill />}
          value="40%"
          color="bg-blue-500 text-white"
        />
        <MainCard
          title="Weather"
          icon={<AiOutlineFire  />}
          value="23C"
        />
        <MainCard
          title="Warnings"
          icon={<FaExclamationTriangle />}
          value="4"
          color="bg-green-500 text-white"
        />
        <MainCard
          title="Fixtures Down"
          icon={<FaLightbulb />}
          value="2"
          color="bg-red-500 text-white"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartCard
          title="Statistics"
          chartId="area-chart"
          chartData={areaChartData}
        />
        <ChartCard
          title="Energy Saving Comparison"
          chartId="bar-chart"
          chartData={barChartData}
        />
      </div>
    </main>
  );
};

export default Dashboard;
