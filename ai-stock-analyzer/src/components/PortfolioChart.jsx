import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 10000 },
  { month: "Feb", value: 15000 },
  { month: "Mar", value: 22000 },
  { month: "Apr", value: 30000 },
];

export default function PortfolioChart() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        Portfolio Performance
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}