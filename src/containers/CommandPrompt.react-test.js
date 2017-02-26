import React from 'react';
import { shallow } from 'enzyme';
import { CommandPrompt } from './CommandPrompt.react';
import commandActions from '../actions/commandActions';

jest.mock('../actions/commandActions');

function setup(props) {
  return shallow(<CommandPrompt {...props}></CommandPrompt>);
}

describe('CommandPrompt', () => {
  test('Displays prompt.', () => {
    const wrapper = setup({ command: { text: "Hello" } });
    const input = wrapper.find("#commandInput");
    expect(input.props().value).toBe("Hello");
  });
  test('Passes along command change.', () => {
    const wrapper = setup({ command: { text: "Hello" } });
    const input = wrapper.find("#commandInput");
    input.simulate("change", { target: { value: "Hello!" } });
    expect(commandActions.commandUpdated.mock.calls[0][0]).toBe("Hello!");
  });
   test('Passes along command issued.', () => {
    const wrapper = setup({ command: { text: "Hello" } });
    const input = wrapper.find("form");
    const preventDefault = jest.fn();
    input.simulate("submit", { preventDefault });
    expect(preventDefault.mock.calls[0]).toBeDefined();
    expect(commandActions.commandIssued.mock.calls[0]).toBeDefined();
  });
});
