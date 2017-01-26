import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as GuiActions from '../actions/gui';
import { Core } from '../components';

const CoreContainer = ({ children, leftNavOpened, muiTheme, actions }) => (
  <Core
    leftNavOpened={leftNavOpened}
    muiTheme={muiTheme}
    actions={actions}
  >
    {children}
  </Core>
);

CoreContainer.propTypes = {
  children: PropTypes.object,
  leftNavOpened: PropTypes.bool.isRequired,
  muiTheme: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  leftNavOpened: state.gui.leftNavOpened,
  muiTheme: state.gui.muiTheme,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(GuiActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoreContainer);
