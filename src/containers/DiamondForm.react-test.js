import React from 'react';
import { mount } from 'enzyme';
import { DiamondForm } from './DiamondForm.react';
import { fromJS } from 'immutable';
import calculatorActions from '../actions/calculatorActions';

jest.mock('../actions/calculatorActions');

function setup(props) {
  var data = {
    data: fromJS(props)
  };
  return mount(<DiamondForm {...data}></DiamondForm>);
}

describe('DiamondForm', () => {
  test('Displays fields for diamond information.', () => {
    const wrapper = setup({ length: 1, width: 2, grade: { gia: "VV1" } });
    const form = wrapper.find("form");
    expect(form).not.toBeNull();
  });
  test('length changed', () => {
    const wrapper = setup({ length: 1, width: 2, grade: { gia: "VV1" } });
    const callCount = calculatorActions.diamondUpdated.mock.calls.length;
    wrapper.find("#diamondLength").simulate('change');
    expect(calculatorActions.diamondUpdated.mock.calls.length).toBe(callCount + 1);
    expect(calculatorActions.diamondUpdated.mock.calls[callCount][0]).toEqual({"length": 1});
  });
  test('width changed', () => {
    const wrapper = setup({ length: 1, width: 2, grade: { gia: "VV1" } });
    const callCount = calculatorActions.diamondUpdated.mock.calls.length;
    wrapper.find("#diamondWidth").simulate('change');
    expect(calculatorActions.diamondUpdated.mock.calls.length).toBe(callCount + 1);
    expect(calculatorActions.diamondUpdated.mock.calls[callCount][0]).toEqual({"width": 2});
  });
});
