import Rx from 'rxjs';
import commands from '../actions/calculatorActions';
import { calculateScore, calculateCombinedScore } from '../services/calculator';

export default Rx.Observable.merge(

  commands.actions.addInclusion$.map(_ => state => {
    //return updateCommand(state, commandText);
  }),
  commands.actions.removeInclusion$.map(_ => state => {
    //return performCommand(state);
  }),
  commands.actions.editInclusion$.map(_ => state => {
    //return performCommand(state);
  }),
  commands.actions.diamondUpdated$.map((prop, val) => state => {
    // update diamond copy
    // validate
    // see if we should recalculate
  }),
  commands.actions.inclusionUpdated$.map((prop, val) => state => {

  }),
  commands.actions.clear$.map(_ => state => {
    //return performCommand(state);
  })
);
