import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import InclusionDimensions from './InclusionDimensions.react';

function setup(props) {
  const data = {
    data: fromJS(props)
  };
  return shallow(<InclusionDimensions {...data}></InclusionDimensions>);
}

describe('InclusionDimensions', () => {
  test('Displays fields for inclusion dimensions.', () => {
    const wrapper = setup({ length: 6.5, width: 6.5 });
    const form = wrapper.find("form");
    expect(form).not.toBeNull();
  });
});
