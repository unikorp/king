import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './../../src/store/configureStore';
import Root from './../../src/containers/Root';

const expect = chai.expect;

describe('<Root />', () => {
  it('renders <Root /> container', () => {
    const store = configureStore();
    const history = syncHistoryWithStore(createMemoryHistory(), store);

    const wrapper = shallow(<Root store={store} history={history} />);

    expect(wrapper.text()).to.equal('<Provider />');
  });
});
