import Rx from 'rxjs';
import { Map } from 'immutable';

export default function configureStore(reducer$, initialState = {}) {
  return Rx.Observable.of(initialState)
          .merge(reducer$)
          .scan((state, reducer) => {
            const newState = reducer(state);
            const result = state.mergeDeep(newState);
            return result;
          })
          .publishReplay(1)
          .refCount();
}

