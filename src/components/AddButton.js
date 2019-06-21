import React from "react";

const AddButton = props => {
  return (
    <button color={props.color} onClick={e => props.click}>
      {props.buttonText}
    </button>
  );
};

export default AddButton;
