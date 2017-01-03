import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';

import { Overview } from './../../src/components';

const expect = chai.expect;

describe('<Overview />', () => {
  it('renders a table into <Overview /> component', () => {
    const wrapper = shallow(<Overview />);

    expect(wrapper.contains('Key')).to.equal(true);
  });
});
