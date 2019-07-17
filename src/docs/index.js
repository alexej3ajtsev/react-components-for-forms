import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {InputWithMask} from '../lib/InputWithMask';
import {Checkbox} from '../lib/Checkbox';

const App = () => (
  <div>
    <h1>React Form Components Libriary</h1>
    <Fragment>
      <h2>Input with Mask</h2>
      <p>Text Input with mask example!</p>
      <InputWithMask
        label="Your phone"
        mask="+7 (999) 999 99 99"
        onChange={value => console.log(value)}
      />
    </Fragment>
    <Fragment>
      <h2>Checkbox</h2>
      <p>Checkbox</p>
      <Checkbox color="red"/>
    </Fragment>
    <Fragment>
      <h2>Checkbox checked</h2>
      <p>Checkbox</p>
      <Checkbox color="red" checked/>
    </Fragment>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
