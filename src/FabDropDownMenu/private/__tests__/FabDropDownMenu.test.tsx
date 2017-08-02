import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FabDropDownMenu from '../../FabDropDownMenu';

describe('rendering', () => {
  it('should render a <FabDropDownMenu />', () => {
    const wrapper = shallow(<FabDropDownMenu />);
    expect(1).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});