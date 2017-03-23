import Rx from 'rxjs';
import commands from '../actions/calculatorActions';
import { calculateScore, calculateCombinedScore } from '../services/calculator';
import validate from '../services/validations';

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
  commands.actions.diamondUpdated$.map((prop, val) => current => {
    var state = current.merge({ diamond: { [prop]: val }});
    var errors = validate(state.toJS());
    if (!hasErrors(errors)) {
      state = state.set('inclusion', calculateScore(state.diamond, state.inclusions[state.inclusionIndex]));
      return state.set('diamond',  calculateCombinedScore(state.diamond, state.inclusions));
    } else {
      return state.merge({ errors });
    }
  }),
  commands.actions.inclusionUpdated$.map((prop, val) => state => {
    var state = current.merge({ inclusion: { [prop]: val }});
    var errors = validate(state.toJS());
    if (!hasErrors(errors)) {
      state = state.set('inclusion', calculateScore(state.diamond, state.inclusions[state.inclusionIndex]));
      return state.set('diamond',  calculateCombinedScore(state.diamond, state.inclusions));
    } else {
      return state.merge({ errors });
    }
  }),
  commands.actions.clear$.map(_ => state => {
    //return performCommand(state);
  })
);

function hasErrors(errors) {
  return Object.keys(errors.diamond).length > 0
      || Object.keys(errors.inclusion).length > 0;
}
