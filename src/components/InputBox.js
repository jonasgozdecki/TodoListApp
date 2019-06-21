import React from "react";
import { Input } from "reactstrap";

const InputBox = props => {
  return (
    <div className="task-input">
      <Input placeholder={props.placeholder} name={props.itemName} />
    </div>
  );
};

export default InputBox;
