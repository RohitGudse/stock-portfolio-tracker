import { useApp } from "../context/AppContext";

export default function PredictionPanel() {
  const { selected } = useApp();

  if (!selected) return null;

  const prediction = Math.random() > 0.5 ? "UP 📈" : "DOWN 📉";

  return (
    <div>
      <h3>AI Prediction</h3>
      <p>{selected.symbol}: {prediction}</p>
    </div>
  );
}