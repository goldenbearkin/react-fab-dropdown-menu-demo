import * as React from 'react';
import FabDropDownMenu from '../../FabDropDownMenu';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<FabDropDownMenu />', () => {
  const wrapper = shallow(<FabDropDownMenu />);
  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('1+1=2', () => {
    expect(1 + 1).toBe(2);
  });
});