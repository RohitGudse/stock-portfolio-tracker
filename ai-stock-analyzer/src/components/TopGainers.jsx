import React from "react";

const gainers = [
  { name: "TCS", gain: "+4.5%" },
  { name: "Infosys", gain: "+3.1%" },
  { name: "Reliance", gain: "+2.9%" },
];

export default function TopGainers() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5">
      <h2 className="text-xl font-bold mb-4">Top Gainers</h2>

      {gainers.map((stock, index) => (
        <div
          key={index}
          className="flex justify-between py-2 border-b"
        >
          <span>{stock.name}</span>
          <span className="text-green-600 font-bold">
            {stock.gain}
          </span>
        </div>
      ))}
    </div>
  );
}