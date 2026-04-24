import { useStock } from "../context/StockContext";

export default function TradePanel() {
  const { selectedStock, buyStock } = useStock();

  if (!selectedStock) return null;

  return (
    <div>
      <h3>Trade {selectedStock.symbol}</h3>
      <button onClick={() => buyStock(selectedStock)}>Buy</button>
    </div>
  );
}