import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import Root from './root';

render(
  <Root />,
  document.getElementById('app')
);
