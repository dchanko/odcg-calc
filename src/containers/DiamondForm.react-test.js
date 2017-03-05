import React from 'react';
import { shallow } from 'enzyme';
import { DiamondForm } from './DiamondForm.react';

function setup(props) {
  return shallow(<DiamondForm {...props}></DiamondForm>);
}

describe('DiamondForm', () => {
  test('Displays fields for diamond information.', () => {
    const wrapper = setup({});
    const form = wrapper.find("form");
    expect(form).not.toBeNull();
  });
});
