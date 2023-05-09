import React from "react";
import { useParams } from "react-router-dom";

const Input = (props) => {
  const { input } = useParams();

  if (!isNaN(input)) {
    return (
      <div className="container text-center fs-4">
        <p>The number provided: {input}</p>
      </div>
    );
  } else {
    return (
      <div className="container text-center fs-4">
        <p>The word provided: {input}</p>
      </div>
    );
  }
};

export default Input;
