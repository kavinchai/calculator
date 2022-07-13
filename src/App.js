import React, { useEffect, useState } from "react";
import "./App.css";
import { calcBtnVal } from "./constants";

const App = () => {
  const [inputList, setInputList] = useState([]);
  const handleBtnClick = (btn) => {
    console.log(btn);
  };
  return (
    <div className="app">
      <div className="calcContainer">
        <div className="calcDisplay"></div>
        <div className="calcBtnContainer">
          {calcBtnVal.map((btn, btnIndex) => (
            <button
              className={`btn btn${btnIndex}`}
              onClick={() => {
                handleBtnClick(btn);
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
