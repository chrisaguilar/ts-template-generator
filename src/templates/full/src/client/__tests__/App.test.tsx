import { shallow } from 'enzyme';
import * as React from 'react';
import { create as snapshot } from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBeGreaterThan(0);
  });
  it('renders correctly', () => {
    const tree = snapshot(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
