import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

function Example() {
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState('Some text…');
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [setCount]);
  return (
    <div>
      <p>Text: {txt}</p>
      <p>Count: {count}</p>
      <button onClick={() => setTxt('hello')}>Set Text</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={incrementCount} />
    </div>
  );
}

export default Example;
