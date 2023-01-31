import React from "react";
import HeadText from "./HeadText";

function Calculate(props) {
  const amount = Math.round(props.calc * 100) / 100;

  return (
    <div className="calc">
      <span>
        <HeadText text={props.text} />
        <p>/ person</p>
      </span>
      <span className="display">
        ${isNaN(amount) || !isFinite(amount) ? "0.00" : amount}
      </span>
    </div>
  );
}

export default Calculate;
