import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { MuiThemeProvider } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Home from 'material-ui/svg-icons/action/home';
import Info from 'material-ui/svg-icons/action/info';
import { AppBar, Drawer, MenuItem } from 'material-ui';

const Core = ({ children, leftNavOpened, muiTheme, actions }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <AppBar
        title={children.props.route.title || 'Overview'}
        onLeftIconButtonTouchTap={actions.toggleLeftNav}
        iconElementLeft={<IconButton><Menu /></IconButton>}
        iconElementRight={<FlatButton
          icon={<Info />}
          label="About"
          containerElement={<Link to="/about">About</Link>}
        />}
      />

      <Drawer
        docked={false}
        width={250}
        open={leftNavOpened}
        onRequestChange={actions.toggleLeftNav}
      >
        <AppBar
          title="Menu"
          onLeftIconButtonTouchTap={actions.toggleLeftNav}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        />

        <MenuItem
          leftIcon={<Home />}
          primaryText="Overview"
          containerElement={<Link to="/">Overview</Link>}
          onTouchTap={actions.toggleLeftNav}
        />
      </Drawer>

      <main style={{ marginLeft: '20px', fontFamily: muiTheme.fontFamily }}>
        { children }
      </main>
    </div>
  </MuiThemeProvider>
);

Core.propTypes = {
  children: PropTypes.object,
  leftNavOpened: PropTypes.bool.isRequired,
  muiTheme: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Core;
