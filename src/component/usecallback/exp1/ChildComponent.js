import React from 'react';

function ChildComponent({ onClick }) {
  console.log('ChildComponent is rendered');
  return <button onClick={onClick}>Click me</button>;
}

export default React.memo(ChildComponent);
