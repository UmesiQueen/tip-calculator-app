import React from "react";
import HeadText from "./HeadText";

function Calculate(props) {

  return (
    <div className="calc">
      <span>
        <HeadText text={props.text} />
        <p>/ person</p>
      </span>
      <span className="display">
        ${props.calc}
      </span>
    </div>
  );
}

export default Calculate;
