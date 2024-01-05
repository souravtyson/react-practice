import React from 'react';
import CheckboxCompoent from './component/CheckboxCompoent';
import TextDisplay from './component/TextDisplay';
import Example from './component/usecallback/exp1/Example';
import ParentComponent from './component/usecallback/exp2/ParentComponent';
import ExpInfiniteLoop from './component/useeffect/exp1/ExpInfiniteLoop';
import Multiply from './component/counter/Multiply.js';
// import Todos from './component/todo/exp1/Todos.js'
import Todos from './component/todo/exp2/Todos.js'
import './style.css';

export default function App() {
  return (
    <div>
      {/* <CheckboxCompoent /> */}
      {/* <TextDisplay /> */}

      {/* useCallBack hook example */}
      {/* <Example /> */}
      {/* <Example /> */}
      {/* <ExpInfiniteLoop /> */}
      {/* <Multiply /> */}
      <Todos />
    </div>
  );
}
