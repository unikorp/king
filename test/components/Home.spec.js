import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';

import Home from './../../src/components/Home';

const expect = chai.expect;

describe('<Home />', () => {
  it('renders a title into <Home /> component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
