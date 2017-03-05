import React from 'react';
import { shallow } from 'enzyme';
import InclusionDimensions from './InclusionDimensions.react';

function setup(props) {
  return shallow(<InclusionDimensions {...props}></InclusionDimensions>);
}

describe('InclusionDimensions', () => {
  test('Displays fields for inclusion dimensions.', () => {
    const wrapper = setup({});
    const form = wrapper.find("form");
    expect(form).not.toBeNull();
  });
});
