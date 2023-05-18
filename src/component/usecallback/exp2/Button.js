import React from 'react';

const Button = ({ handleClick, children }) => {
  console.log(`rendered button ${children} component `);
  return <button onClick={handleClick}>{children}</button>;
};

export default React.memo(Button);
