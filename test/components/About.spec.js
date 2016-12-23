import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';

import About from './../../src/components/About';

var expect = chai.expect;

describe('<About />', () => {
  it('renders a title into <About /> component', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
