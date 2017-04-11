import Rx from 'rxjs';
import createActions from './createActions';

const result = createActions(["foo", "bar"]);

test('Subjects are available', () => {
  expect(result.actions.foo$).toBeInstanceOf(Rx.Subject);
  expect(result.actions.bar$).toBeInstanceOf(Rx.Subject);
});

test('actions are available', () => {
  expect(result.foo).toBeInstanceOf(Function);
  expect(result.bar).toBeInstanceOf(Function);
});

test('wired', () => {
  result.actions.foo$.subscribe(x => {
    expect(x.a).toBe(1);
    expect(x.b).toBe(2);
  });
  result.foo({ a: 1, b: 2});
})
