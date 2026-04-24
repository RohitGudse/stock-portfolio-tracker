import StockList from "./StockList";
import ChartView from "./ChartView";
import Portfolio from "./Portfolio";
import TradePanel from "./TradePanel";

export default function Dashboard() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr 2fr", gap: 20 }}>
      <StockList />
      <ChartView />
      <div>
        <TradePanel />
        <Portfolio />
      </div>
    </div>
  );
}