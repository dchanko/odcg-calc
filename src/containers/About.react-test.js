import React from 'react';
import About from './About.react';
import renderer from 'react-test-renderer';

describe('About View', () => {
  test('Displays information.', () => {
    const component = renderer.create(
      <About></About>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
