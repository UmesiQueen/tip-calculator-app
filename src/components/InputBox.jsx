import React from "react";
import Heading from "./HeadText";
import Input from "./Input";

function InputBox(props) {
  return (
    <div>
       <Heading text={props.heading}/> 
      <div className="inputBox"><img src={props.src} alt="logo"/>
      <Input placeholder="0" name={props.name} onChange={props.onChange}/>
      </div>
    </div>
  );
}

export default InputBox;
