import Rx from 'rxjs';
import commands from '../actions/calculatorActions';
import { calculateScore, calculateCombinedScore } from '../services/calculator';

export default Rx.Observable.merge(

  commands.actions.addInclusion$.map(commandText => state => {
    //return updateCommand(state, commandText);
  }),
  commands.actions.removeInclusion$.map(_ => state => {
    //return performCommand(state);
  }),
  commands.actions.editInclusion$.map(_ => state => {
    //return performCommand(state);
  }),
  commands.actions.fieldUpdated$.map(_ => state => {
    //return performCommand(state);
  }),
  commands.actions.clear$.map(_ => state => {
    //return performCommand(state);
  })
);
