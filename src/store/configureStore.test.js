import fs from 'fs';
import Rx from 'rxjs';
import configureStore from './configureStore';
import { Map } from 'immutable';

test('configureStore creates state Observable', () => {
  const action$ = new Rx.Subject();
  const reducer$ = action$.map(change => state => {
    return Map({ count: state.get('count') + change });
  });
  let state = Map({ count: 0 });
  const store = configureStore(reducer$, state);
  store.subscribe(newState => {
    state = newState;
  });
  expect(state.get('count')).toBe(0);
  action$.next(1);
  expect(state.get('count')).toBe(1);
});
