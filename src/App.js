import React from 'react';
import CheckboxCompoent from './component/CheckboxCompoent';
import TextDisplay from './component/TextDisplay';
import Example from './component/usecallback/exp1/Example';
import ParentComponent from './component/usecallback/exp2/ParentComponent';
import './style.css';

export default function App() {
  return (
    <div>
      {/* <CheckboxCompoent /> */}
      {/* <TextDisplay /> */}

      {/* useCallBack hook example */}
      {/* <Example /> */}
      <ParentComponent />
    </div>
  );
}
