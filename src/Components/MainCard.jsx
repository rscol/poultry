import React from "react";

const MainCard = ({ title, icon, value, color }) => (
  <div className={`border rounded shadow-md px-4 py-6 ${color}`}>
    <p className="text-gray-900 font-medium pb-4">{title}</p>
    <div className="flex gap-4 items-center">
      <span className="text-3xl">{icon}</span>
      <span className="text-gray-900 text-5xl font-semibold">{value}</span>
    </div>
  </div>
);

export default MainCard;
