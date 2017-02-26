import Rx from 'rxjs';
import commandReducer$ from './commandReducer';

export default Rx.Observable.merge(
  commandReducer$
);

