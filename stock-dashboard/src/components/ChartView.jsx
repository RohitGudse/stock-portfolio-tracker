import { useStock } from "../context/StockContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale
} from "chart.js";
import { CandlestickController, CandlestickElement } from "chartjs-chart-financial";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  CandlestickController,
  CandlestickElement
);

export default function ChartView() {
  const { selectedStock } = useStock();

  if (!selectedStock) return <p>Select a stock</p>;

  const data = {
    datasets: [
      {
        label: selectedStock.symbol,
        data: [
          { x: new Date(), o: 100, h: 110, l: 90, c: 105 }
        ]
      }
    ]
  };

  return <Chart type="candlestick" data={data} />;
}