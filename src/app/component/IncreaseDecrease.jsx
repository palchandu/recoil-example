"use client";
import React from "react";
import { useIncDecSSR } from "@/state/state";
const IncreaseDecrease = () => {
    const [number, setNumber] = useIncDecSSR();
  return (
    <>
      <div className="flex flex-col">
        
        <div className="num-value">Number:{number?number:'Loading...'}</div>
        <div className="action-area flex gap-3">
          <button
            className="bg-lime-500 p-2 rounded text-white"
            onClick={() => setNumber((prevNum) => prevNum + 1)}
          >
            Increament
          </button>
          <button
            className="bg-red-500 p-2 rounded text-white"
            onClick={() => setNumber((prevNum) => prevNum - 1)}
          >
            Decreament
          </button>
        </div>
      </div>
    </>
  );
};

export default IncreaseDecrease;
