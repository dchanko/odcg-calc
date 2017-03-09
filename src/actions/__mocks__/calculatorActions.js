import Rx from 'rxjs';

export default {
  actions: {
    addInclusion$: new Rx.Subject(),
    editInclusion$: new Rx.Subject(),
    removeInclusion$: new Rx.Subject(),
    fieldUpdated$: new Rx.Subject(),
    clear$: new Rx.Subject()
  },
  addInclusion: jest.fn(() => {}),
  editInclusion: jest.fn(() => {}),
  removeInclusion: jest.fn(() => {}),
  fieldUpdated: jest.fn(() => {}),
  clear: jest.fn((_, val) => val)
};
