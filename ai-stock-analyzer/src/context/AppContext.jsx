import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [stocks, setStocks] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [selected, setSelected] = useState(null);

  // Mock real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prev =>
        prev.map(s => ({
          ...s,
          price: (s.price + (Math.random() - 0.5) * 5).toFixed(2)
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setStocks([
      { symbol: "RELIANCE", price: 2500 },
      { symbol: "TCS", price: 3500 },
      { symbol: "INFY", price: 1500 }
    ]);
  }, []);

  const addToWatchlist = (stock) => {
    setWatchlist(prev => [...prev, stock]);
  };

  return (
    <AppContext.Provider value={{
      stocks,
      watchlist,
      selected,
      setSelected,
      addToWatchlist
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);