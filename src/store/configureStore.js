import Rx from 'rxjs';

export default function configureStore(reducer$, initialState = {}) {
  return Rx.Observable.of(initialState)
          .merge(reducer$)
          .scan((state, reducer) => {
            return Object.assign({}, state, reducer(state))
          })
          .publishReplay(1)
          .refCount();
}

