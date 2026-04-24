import Watchlist from "./Watchlist";
import StockChart from "./StockChart";
import PredictionPanel from "./PredictionPanel";
import NewsPanel from "./NewsPanel";
import AlertBox from "./AlertBox";

export default function Dashboard() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr 2fr", gap: 20 }}>
      <Watchlist />
      <StockChart />
      <div>
        <PredictionPanel />
        <NewsPanel />
        <AlertBox />
      </div>
    </div>
  );
}