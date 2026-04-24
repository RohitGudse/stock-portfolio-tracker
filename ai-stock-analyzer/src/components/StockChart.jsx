import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { useApp } from "../context/AppContext";

export default function StockChart() {
  const { selected } = useApp();

  if (!selected) return <p>Select stock</p>;

  const data = [
    { time: "1", price: 100 },
    { time: "2", price: 120 },
    { time: "3", price: 110 }
  ];

  return (
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="price" />
    </LineChart>
  );
}