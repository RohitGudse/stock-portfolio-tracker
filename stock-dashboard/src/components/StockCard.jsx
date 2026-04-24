import { useStock } from "../context/StockContext";

export default function StockCard({ stock }) {
  const { setSelectedStock } = useStock();

  return (
    <div
      onClick={() => setSelectedStock(stock)}
      style={{
        padding: 10,
        border: "1px solid #ccc",
        margin: 5,
        cursor: "pointer"
      }}
    >
      <h4>{stock.symbol}</h4>
      <p>${stock.price}</p>
    </div>
  );
}