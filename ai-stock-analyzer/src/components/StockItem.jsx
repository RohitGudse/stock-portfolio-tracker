import { useApp } from "../context/AppContext";

export default function StockItem({ stock }) {
  const { setSelected, addToWatchlist } = useApp();

  return (
    <div style={{ border: "1px solid #ccc", margin: 5, padding: 10 }}>
      <h4>{stock.symbol}</h4>
      <p>₹{stock.price}</p>
      <button onClick={() => setSelected(stock)}>View</button>
      <button onClick={() => addToWatchlist(stock)}>Add</button>
    </div>
  );
}