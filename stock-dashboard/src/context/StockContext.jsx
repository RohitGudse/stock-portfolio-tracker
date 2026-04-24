import { createContext, useContext, useState, useEffect } from "react";

const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [portfolio, setPortfolio] = useState([]);

  // Mock WebSocket (real-time simulation)
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prev =>
        prev.map(stock => ({
          ...stock,
          price: (stock.price + (Math.random() - 0.5) * 2).toFixed(2),
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Initial mock data
  useEffect(() => {
    setStocks([
      { symbol: "AAPL", price: 180 },
      { symbol: "GOOG", price: 2800 },
      { symbol: "TSLA", price: 900 },
    ]);
  }, []);

  const buyStock = (stock) => {
    setPortfolio(prev => [...prev, stock]);
  };

  return (
    <StockContext.Provider value={{
      stocks,
      selectedStock,
      setSelectedStock,
      portfolio,
      buyStock
    }}>
      {children}
    </StockContext.Provider>
  );
};

export const useStock = () => useContext(StockContext);