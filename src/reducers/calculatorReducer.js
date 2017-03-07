import Rx from 'rxjs';
import commands from '../actions/calculatorActions';
import { calculateScore, calculateCombinedScore } from '../services/calculator';

export default Rx.Observable.merge(

  commands.actions.inclusionAdded$.map(commandText => state => {
    //return updateCommand(state, commandText);
  }),
  commands.actions.inclusionRemoved$.map(_ => state => {
    //return performCommand(state);
  }),
  commands.actions.clear$.map(_ => state => {
    //return performCommand(state);
  })
);
