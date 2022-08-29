import React from "react";

const Button = (props) => {
  return (
    <div className="buttonContainer">
      <button onClick={props.click} className="button">
        {props.name}
      </button>
    </div>
  );
};

export default Button;
