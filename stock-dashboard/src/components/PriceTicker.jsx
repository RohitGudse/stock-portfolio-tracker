import { useStock } from "../context/StockContext";

export default function PriceTicker() {
  const { stocks } = useStock();

  return (
    <marquee>
      {stocks.map(s => `${s.symbol}: $${s.price} | `)}
    </marquee>
  );
}