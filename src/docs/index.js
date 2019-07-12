import React from 'react';
import ReactDOM from 'react-dom';
import {InputWithMask} from '../lib/InputWithMask';

const App = () => (
  <div>
    <h1>React Form Components Libriary</h1>
    <h2>Input with Mask</h2>
    <p>Text Input with mask example!</p>
    <table>
    </table>
    <InputWithMask
      label="Your phone"
      mask="+7 (999) 999 99 99"
      onChange={value => console.log(value)}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
