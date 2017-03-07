import Rx from 'rxjs';
import calculatorActions from '../actions/calculatorActions';
import { calculateScore, calculateCombinedScore } from '../services/calculator';
import calculatorReducer from './calculatorReducer';

jest.mock('../actions/calculatorActions');
jest.mock('../services/calculator');

describe('calculatorReducer', () => {
  test('placeholder', () => {

  });
  /*
  test('combines calculateScore', () => {
    const sub = calculatorReducer.subscribe((fun) => {
      expect(typeof(fun)).toBe("function");
      expect(calculateScore.mock.calls.length).toBe(0);
      fun();
      expect(calculateScore.mock.calls.length).toBe(1);
    });
    calculatorActions.actions.calculateScore$.next();
    sub.unsubscribe();
  });

  test('combines calculateCombinedScore', () => {
    const sub = commandReducer.subscribe((fun) => {
      expect(typeof(fun)).toBe("function");
      expect(calculateCombinedScore.mock.calls.length).toBe(0);
      fun();
      expect(calculateCombinedScore.mock.calls.length).toBe(1);
    });
    calculatorActions.actions.calculateCombinedScore$.next();
    sub.unsubscribe();
  });
  */

});


