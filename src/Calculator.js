import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState(""); // لتخزين المدخلات
  const [result, setResult] = useState(""); // لتخزين النتيجة

  // التعامل مع الضغط على الأزرار
  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  // حساب النتيجة عند الضغط على "="
  const handleCalculate = () => {
    try {
      setResult(eval(input)); // حساب النتيجة
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      {/* عرض المدخلات والنتيجة */}
      <div className="display">
        <span>{input}</span>
        <span className="result">= {result}</span>
      </div>
      {/* الأزرار */}
      <div className="buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            className="button number"
            onClick={() => handleButtonClick(num.toString())}
          >
            {num}
          </button>
        ))}
        <button className="button operator" onClick={() => handleButtonClick("+")}>
          +
        </button>
        <button className="button operator" onClick={() => handleButtonClick("-")}>
          -
        </button>
        <button className="button equals" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
