import React from "react";

const cards = [
  {
    title: "Total Investment",
    value: "₹2,50,000",
  },
  {
    title: "Current Value",
    value: "₹3,10,000",
  },
  {
    title: "Profit / Loss",
    value: "+₹60,000",
  },
  {
    title: "Daily Gain",
    value: "+2.5%",
  },
];

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl p-5"
        >
          <h3 className="text-gray-500 text-sm">{card.title}</h3>
          <p className="text-2xl font-bold mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
}