import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';

import About from './../../src/components/About';

const expect = chai.expect;

describe('<About />', () => {
  it('renders a title into <About /> component', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
