import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import InclusionPosition from './InclusionPosition.react';

function setup(props) {
  const data = {
    data: fromJS(props)
  };
  return shallow(<InclusionPosition {...data}></InclusionPosition>);
}

describe('InclusionPosition', () => {
  test('Displays fields to specify position of the inclusion.', () => {
    const wrapper = setup({ position: 1 });
    const form = wrapper.find("form");
    expect(form).not.toBeNull();
  });
});
