import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Loader from "./components/Loader";
import HistoryModal from './components/HistoryModal'

import { getFlamesResult, calculateLovePercentage, getZodiacCompatibility } from "./utils/flamesLogic";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  useEffect(() => {
    const savedHistory = localStorage.getItem("flamesHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const saveToHistory = (newData) => {
    const updatedHistory = [newData, ...history].slice(0, 10); // Keep last 10
    setHistory(updatedHistory);
    localStorage.setItem("flamesHistory", JSON.stringify(updatedHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("flamesHistory");
  };

  const handleStart = (name1, name2, zodiac1, zodiac2) => {
    setLoading(true);
    setTimeout(() => {
      const { result, steps, count, common } = getFlamesResult(name1, name2);
      const lovePercentage = calculateLovePercentage(name1, name2);
      const zodiacCompatibility = getZodiacCompatibility(zodiac1, zodiac2);
      
      const newData = { 
        name1, name2, result, steps, count, common, 
        lovePercentage, zodiacCompatibility, 
        timestamp: new Date().toISOString() 
      };
      
      setData(newData);
      saveToHistory(newData);
      setLoading(false);
    }, 2000); // Reduced to 2s for better UX
  };

  const handleReset = () => setData(null);

  return (
    <div className="mainContainer">
      {loading ? (
        <Loader />
      ) : !data ? (
        <Home onStart={handleStart} onOpenHistory={() => setIsHistoryOpen(true)} />
      ) : (
        <Result {...data} onReset={handleReset} />
      )}
      
      <HistoryModal 
        isOpen={isHistoryOpen} 
        onClose={() => setIsHistoryOpen(false)} 
        history={history}
        onClear={clearHistory}
      />
    </div>
  );
};

export default App;
