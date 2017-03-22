import Rx from 'rxjs';
import calculatorActions from './calculatorActions';

test('Subjects are available', () => {
  expect(calculatorActions.actions.addInclusion$).toBeInstanceOf(Rx.Subject);
  expect(calculatorActions.actions.removeInclusion$).toBeInstanceOf(Rx.Subject);
  expect(calculatorActions.actions.editInclusion$).toBeInstanceOf(Rx.Subject);
  expect(calculatorActions.actions.diamondUpdated$).toBeInstanceOf(Rx.Subject);
  expect(calculatorActions.actions.inclusionUpdated$).toBeInstanceOf(Rx.Subject);
  expect(calculatorActions.actions.clear$).toBeInstanceOf(Rx.Subject);
});

test('actions are available', () => {
  expect(calculatorActions.addInclusion).toBeInstanceOf(Function);
  expect(calculatorActions.removeInclusion).toBeInstanceOf(Function);
  expect(calculatorActions.editInclusion).toBeInstanceOf(Function);
  expect(calculatorActions.inclusionUpdated).toBeInstanceOf(Function);
  expect(calculatorActions.diamondUpdated).toBeInstanceOf(Function);
  expect(calculatorActions.clear).toBeInstanceOf(Function);
});
