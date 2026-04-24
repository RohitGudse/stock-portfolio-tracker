import { useApp } from "../context/AppContext";
import StockItem from "./StockItem";
import AddStock from "./AddStock";

export default function Watchlist() {
  const { stocks } = useApp();

  return (
    <div>
      <AddStock />
      {stocks.map(s => (
        <StockItem key={s.symbol} stock={s} />
      ))}
    </div>
  );
}