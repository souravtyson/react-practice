import React from "react";

const CheckboxStatus = ({ stat }) => {
  return (
    <div>
      {stat.map(elem => {
        return <p key={elem.id}>{elem.isChecked ? elem.name : ""}</p>;
      })}
    </div>
  );
};

export default CheckboxStatus;
