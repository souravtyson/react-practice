import React, { useState } from "react";
import CheckboxStatus from "./CheckboxStatus";

const CheckboxCompoent = () => {
  const [stat, setStat] = useState([]);

  const updateStat = (id, n, check) => {
    let index = stat.findIndex(y => y.id === id);
    if (index === -1) {
      setStat([
        ...stat,
        {
          id: id,
          name: n,
          isChecked: check
        }
      ]);
    } else {
      setStat([
        ...stat.slice(0, index),
        {
          id: id,
          name: n,
          isChecked: check
        },
        ...stat.slice(index + 1)
      ]);
    }
  };

  const checkboxChecked = event => {
    let id = event.target.id;
    let check = event.target.checked;
    let n = event.target.name;
    if (event.target.checked) {
      updateStat(id, n, check);
    } else {
      updateStat(id, n, check);
    }
  };

  return (
    <div>
      Checkbox1{" "}
      <input
        type="checkbox"
        name="checkbox1"
        id="1"
        onClick={checkboxChecked}
      />
      Checkbox2{" "}
      <input
        type="checkbox"
        name="checkbox2"
        id="2"
        onClick={checkboxChecked}
      />
      <CheckboxStatus stat={stat} />
    </div>
  );
};

export default CheckboxCompoent;
