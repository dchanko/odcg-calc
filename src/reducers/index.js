import Rx from 'rxjs';
import calculatorReducer$ from './calculatorReducer';

export default Rx.Observable.merge(
  calculatorReducer$
);

