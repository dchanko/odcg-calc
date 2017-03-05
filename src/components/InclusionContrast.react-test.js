import React from 'react';
import { shallow } from 'enzyme';
import InclusionContrast from './InclusionContrast.react';

function setup(props) {
  return shallow(<InclusionContrast {...props}></InclusionContrast>);
}

describe('InclusionContrast', () => {
  test('Displays fields for inclusion contrast.', () => {
    const wrapper = setup({});
    const form = wrapper.find("form");
    expect(form).not.toBeNull();
  });
});
