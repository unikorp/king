import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { MuiThemeProvider } from 'material-ui/styles';
import Menu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Home from 'material-ui/svg-icons/action/home';
import Info from 'material-ui/svg-icons/action/info';

import { AppBar, Drawer, MenuItem, IconButton, FlatButton, List, ListItem } from 'material-ui';

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
          rightIcon={<Home />}
          primaryText="Overview"
          containerElement={<Link to="/">Overview</Link>}
          onTouchTap={actions.toggleLeftNav}
        />
        <List>
          <ListItem
            primaryText="Informations routes"
            onTouchTap={actions.toggleLeftNav}
            containerElement={<Link to="/informations">Informations</Link>}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Retrieve node information"
              />,
              <ListItem
                key={2}
                primaryText="Retrieve node status"
              />,
            ]}
          />
        </List>
        <List>
          <ListItem
            primaryText="Cluster"
            onTouchTap={actions.toggleLeftNav}
            containerElement={<Link to="/cluster">Cluster</Link>}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Cluster information"
              />,
              <ListItem
                key={2}
                primaryText="Retrieve cluster status"
              />,
              <ListItem
                key={3}
                primaryText="Forcibly remove a node"
              />,
            ]}
          />
        </List>
        <List>
          <ListItem
            primaryText="API Object"
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Add API"
              />,
              <ListItem
                key={2}
                primaryText="Retrieve API"
              />,
              <ListItem
                key={3}
                primaryText="List APIs"
              />,
              <ListItem
                key={3}
                primaryText="Update API"
              />,
              <ListItem
                key={3}
                primaryText="Update Or Create API"
              />,
              <ListItem
                key={3}
                primaryText="Delete API"
              />,
            ]}
          />
        </List>
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
