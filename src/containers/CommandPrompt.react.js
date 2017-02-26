import React, { PropTypes } from "react";
import { connect } from './context';
import commandActions from '../actions/commandActions';

export class CommandPrompt extends React.Component {
  commandChanged(e) {
    commandActions.commandUpdated(e.target.value);
  }

  onSubmit(e) {
    e.preventDefault();
    commandActions.commandIssued();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} autoComplete="false">
        <input id="commandInput" type="text" value={this.props.command.text} onChange={this.commandChanged} />
      </form>
    );
  }
}

CommandPrompt.propTypes = {
  command: PropTypes.object.isRequired
};

export default connect(state => ({ command: state.command }))(CommandPrompt);




