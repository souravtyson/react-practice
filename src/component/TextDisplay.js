import React, { useState } from "react";

const TextDisplay = () => {
  const [text, setText] = useState("");
  const [disp, setDisp] = useState(false);

  const display = event => {
    setDisp(!disp);
  };

  const changeText = event => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={changeText} />
      <button onClick={display}>Display</button>
      <h2>{disp ? text : ""}</h2>
      <span style={{ color: "red", backgroundColor: "yellow" }}>Hello</span>
    </div>
  );
};

export default TextDisplay;
