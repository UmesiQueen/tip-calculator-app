import React from "react";

function Input(props) {
  return (
    <input
      type="number"
      placeholder={props.placeholder}
      id={props.id}
      className={props.className}
      name={props.name}
      onChange={props.onChange}
    />
  );
}

export default Input;
