import { shallow } from 'enzyme';
import * as React from 'react';
import { create as snapshot } from 'react-test-renderer';

import Main from '../Main';

describe('<Main message={string} />', () => {
  it('should render', () => {
    const wrapper = shallow(<Main message='' />);
    expect(wrapper.length).toBeGreaterThan(0);
  });
  it('renders correctly', () => {
    const tree = snapshot(<Main message='' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
