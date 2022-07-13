import React, { useEffect, useState } from "react";
import "./App.css";
import { calcBtnVal } from "./constants";

const App = () => {
  const [displayNum, setDisplayNum] = useState("");
  const [inputList, setInputList] = useState([]);
  const handleReset = (btn) => {
    console.log(btn);
    setInputList([]);
  };
  const handleInvert = (btn) => {
    console.log(btn);
    if (inputList.length > 0) {
      if (inputList[0] !== "-") {
        setInputList(["-", ...inputList]);
      } else {
        setInputList(inputList.slice(1));
      }
    }
  };
  const handlePercent = (btn) => {
    console.log(btn);
  };
  const handleEquals = (btn) => {
    console.log(btn);
  };
  const handleSign = (btn) => {
    console.log(btn);
  };
  const handleDecimal = (btn) => {
    console.log(btn);
    setInputList((inputList) => [...inputList, btn]);
  };
  const handleNum = (btn) => {
    console.log(btn);
    setInputList((inputList) => [...inputList, btn]);
  };

  useEffect(() => {
    let result = "";
    for (let i = 0; i < inputList.length; i++) {
      result = result.concat(inputList[i]);
    }
    setDisplayNum(result);
  }, [inputList]);

  return (
    <div className="app">
      <div className="calcContainer">
        <div className="calcDisplayComponent">
          <span className="calcDisplay">
            {inputList.length === 0 ? "0" : displayNum}
          </span>
        </div>
        <div className="calcBtnContainer">
          {calcBtnVal.map((btn, btnIndex) => (
            <button
              className={`btn btn${btnIndex}`}
              onClick={() => {
                btn === "C"
                  ? handleReset(btn)
                  : btn === "+/-"
                  ? handleInvert(btn)
                  : btn === "%"
                  ? handlePercent(btn)
                  : btn === "="
                  ? handleEquals(btn)
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                  ? handleSign(btn)
                  : btn === "."
                  ? handleDecimal(btn)
                  : handleNum(btn);
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
