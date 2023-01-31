import React from "react";

function Grid(props) {
  return (
    <div className="grid-item">
      <input
        type="radio"
        value={props.percent}
        id={props.percent}
        name="tip"
        onClick={props.onClick}
      />
      <label htmlFor={props.percent}>{props.percent}</label>
    </div>
  );
}

export default Grid;
