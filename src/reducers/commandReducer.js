import Rx from 'rxjs';
import commands from '../actions/commandActions';
import { updateCommand, performCommand } from '../services/commands';

export default Rx.Observable.merge(

  commands.actions.commandUpdated$.map(commandText => state => {
    return updateCommand(state, commandText);
  }),
  commands.actions.commandIssued$.map(_ => state => {
    return performCommand(state);
  }),
);
