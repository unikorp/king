import React, { PropTypes } from 'react';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';

import {
  AppBar,
} from 'material-ui';

const Core = ({ children }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
      <AppBar title="King" />
      <main>
        { children }
      </main>
    </div>
  </MuiThemeProvider>
);

Core.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Core;
