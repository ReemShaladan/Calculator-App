import React from "react";

function CalculatorButtons({ onButtonClick }) {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "="];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => onButtonClick(button)}
          style={{
            padding: "10px",
            fontSize: "18px",
            backgroundColor: button === "=" ? "green" : button === "+" || button === "-" ? "orange" : "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          {button}
        </button>
      ))}
    </div>
  );
}

export default CalculatorButtons;
