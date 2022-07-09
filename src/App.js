import "./App.css";

function App() {
  const calcBtnVal = [
    ["C", "+/-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  return (
    <div className="app">
      <div className="calcContainer">
        <div className="calcDisplay"></div>
        <div className="calcBtnContainer">
          {calcBtnVal.map((row, rowIndex) => (
            <div className={`row row${rowIndex}`}>
              {row.map((btn, btnIndex) => (
                <button
                  className={`btn btn${btnIndex}`}
                  onClick={() => {
                    console.log(btn);
                  }}
                >
                  {btn}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
