import React from 'react';
import Link from 'react-router/lib/Link';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';

import { NavigationMenu, NavigationClose } from 'material-ui/svg-icons/navigation/close';

import {
  AppBar
} from 'material-ui';

const Core = ({ children }) => {
  return (<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
      <AppBar title="King" />
      <main>
        { children }
      </main>
    </div>
  </MuiThemeProvider>);
};

export default Core;
