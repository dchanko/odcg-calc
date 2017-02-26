import React from 'react';
import { shallow } from 'enzyme';
import { ItemList } from './ItemList.react';

function setup(props) {
  return shallow(<ItemList {...props}></ItemList>);
}

describe('ItemList', () => {
  test('Displays list of items.', () => {
    const wrapper = setup({ items: [ { text: "Hello" }, { text: "World" } ] });
    const ul = wrapper.find("ul");
    expect(ul.childAt(0).text()).toBe("Hello");
    expect(ul.childAt(1).text()).toBe("World");
  });
});
