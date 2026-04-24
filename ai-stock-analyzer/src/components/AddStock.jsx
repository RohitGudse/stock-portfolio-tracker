import { useState } from "react";

export default function AddStock() {
  const [input, setInput] = useState("");

  return (
    <input
      placeholder="Add stock..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
}