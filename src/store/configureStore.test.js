import fs from 'fs';
import Rx from 'rxjs';
import configureStore from './configureStore';

test('configureStore creates state Observable', () => {
  const action$ = new Rx.Subject();
  const reducer$ = action$.map(change => state => {
    return { count: state.count + change };
  });
  let state = { count: 0 };
  const store = configureStore(reducer$, state);
  store.subscribe(newState => {
    state = newState;
  });
  expect(state.count).toBe(0);
  action$.next(1);
  expect(state.count).toBe(1);
});
