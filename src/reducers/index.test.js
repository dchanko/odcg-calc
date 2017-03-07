import Rx from 'rxjs';
import reducers from './index';
import calculatorReducer from './calculatorReducer';

jest.mock('./calculatorReducer');

describe('reducers', () => {
  test('combines Reducers', () => {
    reducers.subscribe(val => expect(val).toBe(42));
    calculatorReducer.next(42);
  });
});


