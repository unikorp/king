import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';

import configureStore from './../../src/store/configureStore';
import * as GuiActions from './../../src/actions/gui';
import CoreContainer from './../../src/containers/CoreContainer';

const expect = chai.expect;

describe('<CoreContainer />', () => {
  it('renders <CoreContainer /> container', () => {
    const store = configureStore();
    const leftNavOpened = sinon.spy();
    const muiTheme = sinon.spy();

    const wrapper = shallow(<CoreContainer
      store={store}
      leftNavOpened={leftNavOpened}
      muiTheme={muiTheme}
      actions={GuiActions}
    />);

    expect(wrapper.props().leftNavOpened).to.equal(false);
  });
});
