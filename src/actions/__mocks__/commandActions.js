import Rx from 'rxjs';

export default {
  actions: {
    commandIssued$: new Rx.Subject(),
    commandUpdated$: new Rx.Subject()
  },
  commandIssued: jest.fn(() => {}),
  commandUpdated: jest.fn((_, val) => val)
};
