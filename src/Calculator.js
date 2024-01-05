import React, { useState } from "react";
import "./Calculator.css"; // Imported Calculator CSS file for styling

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h1 className="title">Calculator</h1>
      <div className="display">{input}</div>
      <div className="buttons">
        <button className="operator" onClick={() => handleButtonClick("/")}>
          /
        </button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>

        <button className="operator" onClick={() => handleButtonClick("*")}>
          *
        </button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>

        <button className="operator" onClick={() => handleButtonClick("-")}>
          -
        </button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>

        <button className="operator" onClick={() => handleButtonClick("+")}>
          +
        </button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button className="equal" onClick={handleCalculate}>
          =
        </button>

        <button className="clear" onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
