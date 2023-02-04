import React from "react";

function Input(props) {
  return (
    <div>
      {props.heading}
      <div
        className="inputBox"
        style={props.style}
        onFocus={(e) => {
          e.target.parentElement.classList.add("active");
        }}
        onBlur={(e) => {
          e.target.parentElement.classList.remove("active");
        }}
      >
        {props.img}
        <input
          type="number"
          placeholder={props.placeholder}
          id={props.id}
          className={props.className}
          name={props.name}
          onChange={props.onChange}
         
        />
      </div>
    </div>
  );
}

export default Input;
