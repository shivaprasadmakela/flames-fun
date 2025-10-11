import React, { useState } from "react";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Loader from "./components/Loader";
import FloatingGif from "./components/FloatingGif";

import { getFlamesResult } from "./utils/flamesLogic";
import "./App.css";


const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleStart = (name1, name2) => {
    setLoading(true);
    setTimeout(() => {
      const { result, steps, count, common } = getFlamesResult(name1, name2);
      setData({ name1, name2, result, steps, count, common });
      setLoading(false);
    }, 3000);
  };

  const handleReset = () => setData(null);

  return (
    <div className="mainContainer">
      {loading ? (
        <Loader />
      ) : !data ? (
        <Home onStart={handleStart} />
      ) : (
        <Result {...data} onReset={handleReset} />
      )}
      <FloatingGif />
    </div>
  );
};

export default App;
