import React, { useState } from "react";
import ResultDisplay from "./ResultDisplay";
import CalculatorButtons from "./CalculatorButtons";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (button) => {
    if (button === "=") {
      try {
        setResult(eval(expression)); // احذري عند استخدام eval، هنا نستخدمه فقط للتجربة
      } catch {
        setResult("Error");
      }
    } else {
      setExpression((prev) => prev + button);
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto", textAlign: "center" }}>
      <ResultDisplay result={expression + (result ? ` = ${result}` : "")} />
      <CalculatorButtons onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
