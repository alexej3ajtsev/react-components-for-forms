import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {InputWithMask} from '../lib/InputWithMask';
import {Checkbox} from '../lib/Checkbox';
import {Button} from '../lib/Button';

const App = () => (
  <div>
    <h1>React Form Components Libriary</h1>
    <Fragment>
      <h2>Input with Mask</h2>
      <p>Text Input with mask example!</p>
      <InputWithMask
        label="Your phone"
        mask="+7 (999) 999 99 99"
        borderRaduis="3px"
        border="1px solid #ddd"
        borderBottom="1px solid #ddd"
        onChange={value => console.log(value)}
      />
    </Fragment>
    <Fragment>
      <h2>Checkbox</h2>
      <Checkbox color="red" checked label="Я согласен с условиями"/>
    </Fragment>
    <Fragment>
      <h2>Button</h2>
      <Button>Button</Button>
    </Fragment>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
