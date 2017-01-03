import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';

import { NotFound } from './../../src/components';

const expect = chai.expect;

describe('<NotFound />', () => {
  it('renders a title into <NotFound /> component', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper.contains(<p>Sorry, we cannot found this page.</p>)).to.equal(true);
  });
});
