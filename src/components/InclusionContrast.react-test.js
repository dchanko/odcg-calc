import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import InclusionContrast from './InclusionContrast.react';

function setup(props) {
  const data = {
    data: fromJS(props)
  };
  return shallow(<InclusionContrast {...data}></InclusionContrast>);
}

describe('InclusionContrast', () => {
  test('Displays fields for inclusion contrast.', () => {
    const wrapper = setup({ contrast: 0 });
    const form = wrapper.find("form");
    expect(form).not.toBeNull();
  });
});
