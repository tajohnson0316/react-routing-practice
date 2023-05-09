import React from "react";
import { useParams } from "react-router-dom";

const InputsAndColors = (props) => {
  const { message, textColor, background } = useParams();
  console.log(message, textColor, background);

  return (
    <div
      className="container text-center fs-4"
      style={{ color: `${textColor}`, backgroundColor: `${background}` }}
    >
      <p>The word provided: {message}</p>
    </div>
  );
};

export default InputsAndColors;
