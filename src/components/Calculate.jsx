import React from "react";
import Header from "./Header";

function Calculate(props) {
  const amount = Math.round(props.calc * 100) / 100;

  return (
    <div className="calc">
      <span>
        <Header text={props.text} />
        <p>/ person</p>
      </span>
      <span className="display">
        ${isNaN(amount) || !isFinite(amount) ? "0.00" : amount}
      </span>
    </div>
  );
}

export default Calculate;
