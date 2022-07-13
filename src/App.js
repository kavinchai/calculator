import React, { useEffect, useState } from "react";
import "./App.css";
import { calcBtnVal, maxDisplay } from "./constants";
import {
  convertToNum,
  calculatePercentage,
  isSign,
  cleanResult,
} from "./helpers";
const App = () => {
  const [displayNum, setDisplayNum] = useState("");
  const [inputList, setInputList] = useState([]);
  const [listCalc, setListCal] = useState([]);
  const containsDecimalChar = (element) => {
    return element === ".";
  };
  const handleReset = (btn) => {
    setInputList([]);
    setListCal([]);
  };
  const handleInvert = (btn) => {
    if (inputList.length > 0) {
      if (inputList[0] !== "-") {
        setInputList(["-", ...inputList]);
      } else {
        setInputList(inputList.slice(1));
      }
    }
  };
  const handlePercent = (btn) => {
    if (inputList.length > 0 && inputList[0] !== ".") {
      let num = convertToNum(displayNum);
      let result = calculatePercentage(num);
      setInputList([result.toString()]);
    }
  };
  const handleEquals = (btn) => {
    if (inputList.length > 0 && listCalc.length > 0) {
      let result;
      let firstVal = convertToNum(listCalc[0]);
      let sign = listCalc[1];
      let secondVal = convertToNum(displayNum);
      setInputList([]);
      setListCal([]);

      if (sign === "+") {
        result = firstVal + secondVal;
      } else if (sign === "-") {
        result = firstVal - secondVal;
      } else if (sign === "/") {
        result = firstVal / secondVal;
      } else if (sign === "X") {
        result = firstVal * secondVal;
      }
      setInputList(result.toString());
    }
  };
  const handleSign = (btn) => {
    if (listCalc.length === 0) {
      setListCal([displayNum]);
      setListCal((listCalc) => [...listCalc, btn]);
      setInputList([]);
    } else if (listCalc.length === 2 && isSign(listCalc[1])) {
      setListCal(listCalc.slice(0, -1));
      setListCal((listCalc) => [...listCalc, btn]);
    }
  };
  const handleDecimal = (btn) => {
    if (inputList.length < maxDisplay) {
      if (!inputList.some(containsDecimalChar)) {
        setInputList((inputList) => [...inputList, btn]);
      }
    }
  };
  const handleNum = (btn) => {
    if (inputList.length < maxDisplay) {
      if (inputList.length === 1) {
        if (inputList[0] === "0") {
          setInputList([btn]);
        } else {
          setInputList((inputList) => [...inputList, btn]);
        }
      } else {
        setInputList((inputList) => [...inputList, btn]);
      }
    }
  };

  const dispClear = (btn) => {
    if (btn === "C") {
      if (listCalc.length === 0) {
        return "C";
      } else {
        return "AC";
      }
    } else {
      return btn;
    }
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
              {dispClear(btn)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
