import React from "react";

function Input(props) {
  return (
    <input
      type="number"
      placeholder={props.placeholder}
      className={props.class}
      name={props.name}
    />
  );
}

export default Input;
