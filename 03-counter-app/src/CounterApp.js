import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 100 }) => {
  const [counter, setCounter] = useState(value);

  //handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSubtract = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button id="+1" onClick={handleAdd}>
        +1
      </button>
      <button id="Reset" onClick={handleReset}>
        Reset
      </button>
      <button id="-1" onClick={handleSubtract}>
        -1
      </button>
    </>
  );
};

export default CounterApp;

CounterApp.propsTypes = {
  value: PropTypes.string.isRequired,
};
