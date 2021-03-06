import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Button from './Button';
import InheritedButton from './InheritedButton';

const mountNode = document.getElementById('root');

ReactDOM.render(<div>
  <Button large />
  <Button />
  <Button ghost />
  <Button ghost large />
  <div>
    <InheritedButton />
    <InheritedButton />
    <InheritedButton />
  </div>
</div>, mountNode);
