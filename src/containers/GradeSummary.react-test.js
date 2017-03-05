import React from 'react';
import { shallow } from 'enzyme';
import { GradeSummary } from './GradeSummary.react';

function setup(props) {
  return shallow(<GradeSummary {...props}></GradeSummary>);
}

describe('GradeSummary', () => {
  test('Displays list of items.', () => {
    const wrapper = setup({});
    const fieldset = wrapper.find("fieldset");
    expect(fieldset).not.toBeNull();
  });
});
