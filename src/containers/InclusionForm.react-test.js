import React from 'react';
import { shallow } from 'enzyme';
import { InclusionForm } from './InclusionForm.react';
import InclusionContrast from '../components/InclusionContrast.react';
import InclusionDimensions from '../components/InclusionDimensions.react';
import InclusionPosition from '../components/InclusionPosition.react';
import commandActions from '../actions/commandActions';

jest.mock('../actions/commandActions');

function setup(props) {
  return shallow(<InclusionForm {...props}></InclusionForm>);
}

describe('InclusionForm', () => {
  test('Displays InclusionDimensions.', () => {
    const wrapper = setup({ });
    const input = wrapper.find("InclusionDimensions");
    expect(input).not.toBeNull();
  });
  test('Displays InclusionContrast.', () => {
    const wrapper = setup({ });
    const input = wrapper.find("InclusionContrast");
    expect(input).not.toBeNull();
  });
  test('Displays InclusionPosition.', () => {
    const wrapper = setup({ });
    const input = wrapper.find("InclusionPosition");
    expect(input).not.toBeNull();
  });
});
