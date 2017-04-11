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
   var errors = validate(state.toJS());
    if (!hasErrors(errors)) {
      state = state.setIn(['inclusions', state.get('inclusionIndex')],
          fromJS(calculateScore(state.get('inclusions').toJS(),
                                state.get('inclusions').get(state.get('inclusionIndex')).toJS())));
      state = state.set('diamond',
          fromJS(calculateCombinedScore(state.get('diamond').toJS(), state.get('inclusions').toJS())));
      return state;
    } else {
      return state.set('errors', errors);
    }
}

function hasErrors(errors) {
  return Object.keys(errors.diamond).length > 0
      || Object.keys(errors.inclusion).length > 0;
}
