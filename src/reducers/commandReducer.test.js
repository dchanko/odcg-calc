import Rx from 'rxjs';
import commandActions from '../actions/commandActions';
import { updateCommand, performCommand } from '../services/commands';
import commandReducer from './commandReducer';

jest.mock('../actions/commandActions');
jest.mock('../services/commands');

describe('commandReducer', () => {
  /*
  test('combines Reducers', () => {
    const obs = Rx.Observable.of({})
                .merge(Rx.Observable.merge(commandReducer))
                .scan((state, reducer) => reducer(state))
                .subscribe(() => {
                  expect(updateCommand.mock.calls).toBe(1);
                  //expect(performCommand.mock.calls.length).toBe(1);
                });
    commandActions.actions.commandUpdated$.next("Hello");
  });
  */
  test('combines performCommand', () => {
    const sub = commandReducer.subscribe((fun) => {
      expect(typeof(fun)).toBe("function");
      expect(performCommand.mock.calls.length).toBe(0);
      fun();
      expect(performCommand.mock.calls.length).toBe(1);
    });
    commandActions.actions.commandIssued$.next();
    sub.unsubscribe();
  });
  test('combines updateCommand', () => {
    const sub = commandReducer.subscribe((fun) => {
      expect(typeof(fun)).toBe("function");
      expect(updateCommand.mock.calls.length).toBe(0);
      fun();
      expect(updateCommand.mock.calls.length).toBe(1);
    });
    commandActions.actions.commandUpdated$.next();
    sub.unsubscribe();
  });
});


