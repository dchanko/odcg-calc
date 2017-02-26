import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home.react';

function setup() {
  return shallow(<Home></Home>);
}

describe("Home Container", () => {
  test('Displays CommandPrompt', () => {
    const wrapper = setup();
    expect(wrapper.find("CommandPrompt")).not.toBeNull();
  });

  test('Displays ItemList', () => {
    const wrapper = setup();
    expect(wrapper.find("ItemList")).not.toBeNull();
  });
});
