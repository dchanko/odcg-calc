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
