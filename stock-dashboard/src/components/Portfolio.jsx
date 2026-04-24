import { useStock } from "../context/StockContext";

export default function Portfolio() {
  const { portfolio } = useStock();

  return (
    <div>
      <h3>💼 Portfolio</h3>
      {portfolio.map((p, i) => (
        <p key={i}>{p.symbol} - ${p.price}</p>
      ))}
    </div>
  );
}