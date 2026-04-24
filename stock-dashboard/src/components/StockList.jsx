import { useStock } from "../context/StockContext";
import StockCard from "./StockCard";
import SearchBar from "./SearchBar";

export default function StockList() {
  const { stocks } = useStock();

  return (
    <div>
      <SearchBar />
      {stocks.map(stock => (
        <StockCard key={stock.symbol} stock={stock} />
      ))}
    </div>
  );
}