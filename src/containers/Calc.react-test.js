import React from 'react';
import { shallow } from 'enzyme';
import { Calc } from './Calc.react';

function setup() {
  return shallow(<Calc></Calc>);
}

describe("Calc Container", () => {
  test('Displays the DiamondForm', () => {
    const wrapper = setup();
    expect(wrapper.find("DiamondForm")).not.toBeNull();
  });

  test('Displays the InclusionForm', () => {
    const wrapper = setup();
    expect(wrapper.find("InclusionForm")).not.toBeNull();
  });

  test('Displays the GradeSummary', () => {
    const wrapper = setup();
    expect(wrapper.find("GradeSummary")).not.toBeNull();
  });
});
