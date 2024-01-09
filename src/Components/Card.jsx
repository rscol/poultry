import React from "react";

const Card = ({ icon, heading, paragraph }) => {
  return (
    <div className="flex items-start gap-4 mb-4">
      <div className="mb-2 self-center">
        <span className="text-green-800 text-2xl lg:text-4xl">{icon}</span>
      </div>
      <div className="text-start">
        <h2 className="text-lg text-slate-700 font-bold mb-1">{heading}</h2>
        <p className="text-gray-700 text-sm">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
