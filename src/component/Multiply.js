import React from 'react';
import { useState } from 'react';

const Multiply = () => {
  const [value, setValue] = useState(1);
  let multipliedVal = value * 5;
  const multiplybyfive = () => {
    setValue(value + 1);
  };

  return (
    <>
      <h1>Original Value : {value}</h1>
      <button onClick={multiplybyfive}>Click to multiply by 5</button>
      <h2>Multiplied value : {multipliedVal}</h2>
    </>
  );
};

export default Multiply;
