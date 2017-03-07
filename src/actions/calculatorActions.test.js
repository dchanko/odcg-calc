import Rx from 'rxjs';
import calculatorActions from './calculatorActions';

test('Subjects are available', () => {
  expect(calculatorActions.actions.inclusionAdded$).toBeInstanceOf(Rx.Subject);
  expect(calculatorActions.actions.inclusionRemoved$).toBeInstanceOf(Rx.Subject);
  expect(calculatorActions.actions.clear$).toBeInstanceOf(Rx.Subject);
});

test('actions are available', () => {
  expect(calculatorActions.inclusionAdded).toBeInstanceOf(Function);
  expect(calculatorActions.inclusionRemoved).toBeInstanceOf(Function);
  expect(calculatorActions.clear).toBeInstanceOf(Function);
});
