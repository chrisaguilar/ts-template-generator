import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import { Main } from './Main';

describe('<Main message={string}/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Main message='asdf' />);
    expect(wrapper.length).to.be.greaterThan(0);
  });
});
