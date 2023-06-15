import React from "react";
import "./CustomInput.css";

const CustomInput = (props) => {

  return (
    <div className="mt-3 mb-3">
      <p style={{fontSize:".8rem"}} >{props.title}</p>
      <input
        style={{ width: `${props.width}` , backgroundColor:`${props.backgroundColor}`}}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e)}
        className="input-box"
      />
    </div>
  );
};

export default CustomInput;
