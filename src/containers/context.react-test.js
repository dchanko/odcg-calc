import React, { Component } from 'react';
import Rx from 'rxjs';
import { mount } from 'enzyme';
import { RxContextProvider, connect } from './context';
import renderer from 'react-test-renderer';

describe("RxContextProvider Container", () => {
  test('Sets context', () => {
    const provider = new RxContextProvider();
    const store = { dummy: "Hello" };
    provider.props = { store$: store };
    expect(provider.getChildContext().store$).toBe(store);
  });
  test('Renders childredn', () => {
    const provider = new RxContextProvider();
    const child = { dummy: "Hello" };
    provider.props = { children: child };
    expect(provider.render()).toBe(child);
  });
});

describe("connect", () => {
  class Child extends Component {
    render () {
      return (
        <div>{this.props.hello}</div>
      );
    }
  }

  test('subscribes to context', () => {
    const ConnectedChild = connect()((Child));
    const subject$ = new Rx.Subject();

    const wrapper = mount(
      <RxContextProvider store$={subject$}>
        <ConnectedChild />
      </RxContextProvider>
    );

    subject$.next({ hello: "Hello" });
    expect(wrapper.find("div").text()).toBe("Hello");

    subject$.next({ hello: "Good Bye" });
    expect(wrapper.find("div").text()).toBe("Good Bye");
  });

});
