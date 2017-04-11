import Rx from 'rxjs';

export default function createActions(names) {
  return names.reduce((acc, name) => {
    const action = new Rx.Subject();
    return Object.assign({}, acc, {
      actions: Object.assign({}, acc.actions, { [`${name}$`]: action }),
      [name]: (x) => action.next(x)
    });
  }, { actions: {} });
}
