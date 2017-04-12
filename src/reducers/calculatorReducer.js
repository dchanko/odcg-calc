import Rx from 'rxjs';
import commands from '../actions/calculatorActions';
import { calculateScore, calculateCombinedScore } from '../services/calculator';
import validate from '../services/validations';
import { fromJS } from 'immutable';

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
  commands.actions.diamondUpdated$.map(change => current => {
    var state = current.mergeDeep({ diamond: change });
    return validateAndUpdate(state);
  }),
  commands.actions.inclusionUpdated$.map(change => current => {
    var state = current.mergeIn(['inclusions', current.get('inclusionIndex')], change);
    return validateAndUpdate(state);
  }),
  commands.actions.clear$.map(_ => state => {
    //return performCommand(state);
  })
);

function validateAndUpdate(state) {
   var errors = validate(state);
    if (!hasErrors(errors)) {
      state = state.updateIn(['inclusions', state.get('inclusionIndex')], inclusion =>
          calculateScore(state.get('diamond'), inclusion));
      state = state.update('diamond', diamond => calculateCombinedScore(diamond, state.get('inclusions')));
      return state;
    } else {
      return state.set('errors', errors);
    }
}

function hasErrors(errors) {
  return errors.get('diamond').keys().length > 0
      || errors.get('inclusion').keys().length > 0;
}
