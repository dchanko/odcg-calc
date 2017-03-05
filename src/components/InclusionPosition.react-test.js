import React from 'react';
import { shallow } from 'enzyme';
import InclusionPosition from './InclusionPosition.react';

function setup(props) {
  return shallow(<InclusionPosition {...props}></InclusionPosition>);
}

describe('InclusionPosition', () => {
  test('Displays fields to specify position of the inclusion.', () => {
    const wrapper = setup({});
    const form = wrapper.find("form");
    expect(form).not.toBeNull();
  });
});
