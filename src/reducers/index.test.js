import Rx from 'rxjs';
import reducers from './index';
import commandReducer from './commandReducer';

jest.mock('./commandReducer');

describe('reducers', () => {
  test('combines Reducers', () => {
    reducers.subscribe(val => expect(val).toBe(42));
    commandReducer.next(42);
  });
});


