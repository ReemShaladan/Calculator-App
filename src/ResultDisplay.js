import React from "react";

function ResultDisplay({ result }) {
  return (
    <div style={{ fontSize: "24px", padding: "10px", textAlign: "right" }}>
      {result}
    </div>
  );
}

export default ResultDisplay;
