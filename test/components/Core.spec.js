import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';

import * as GuiActions from './../../src/actions/gui';
import { Core } from './../../src/components';

const expect = chai.expect;

describe('<Core />', () => {
  it('renders <Core /> component', () => {
    const children = {
      props: {
        route: { title: 'Overview' },
      },
    };
    const leftNavOpened = false;
    const muiTheme = { fontFamily: 'test' };

    const wrapper = shallow(<Core
      leftNavOpened={leftNavOpened}
      muiTheme={muiTheme}
      actions={GuiActions}
    >
      {children}
    </Core>);

    expect(wrapper.props().muiTheme).to.equal(muiTheme);
  });
});
