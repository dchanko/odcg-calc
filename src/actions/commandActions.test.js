import Rx from 'rxjs';
import commandActions from './commandActions';

test('Subjects are available', () => {
  expect(commandActions.actions.commandIssued$).toBeInstanceOf(Rx.Subject);
  expect(commandActions.actions.commandUpdated$).toBeInstanceOf(Rx.Subject);
});

test('actions are available', () => {
  expect(commandActions.commandIssued).toBeInstanceOf(Function);
  expect(commandActions.commandUpdated).toBeInstanceOf(Function);
});
