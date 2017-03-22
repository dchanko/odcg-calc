import Rx from 'rxjs';

export default {
  actions: {
    addInclusion$: new Rx.Subject(),
    editInclusion$: new Rx.Subject(),
    removeInclusion$: new Rx.Subject(),
    diamondUpdated$: new Rx.Subject(),
    inclusionUpdated$: new Rx.Subject(),
    clear$: new Rx.Subject()
  },
  addInclusion: jest.fn(() => {}),
  editInclusion: jest.fn(() => {}),
  removeInclusion: jest.fn(() => {}),
  diamondUpdated: jest.fn(() => {}),
  inclusionUpdated: jest.fn(() => {}),
  clear: jest.fn((_, val) => val)
};
