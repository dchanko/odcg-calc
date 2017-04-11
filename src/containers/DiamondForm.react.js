import React, {PropTypes} from "react";
import { connect } from './context';
import calculatorActions from '../actions/calculatorActions';

export class DiamondForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      length: this.props.length,
      width: this.props.width
    };
  }
  updateField(event) {
    this.setState({ [event.target.name]: event.target.value });
    calculatorActions.diamondUpdated({[event.target.name]: (parseFloat(event.target.value) || '')});
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.length != 0 && parseFloat(this.state.length) != nextProps.length) {
      this.setState({ length: nextProps.length });
    }
    if (nextProps.width != 0 && parseFloat(this.state.width) != nextProps.width) {
      this.setState({ width: nextProps.width });
    }
  }
  render() {
    /*
    const cmd = this.props.command;
    let pendingItem = (cmd.type === "add" && cmd.text.length > 0)
        ? ( <li key="-1">{cmd.text}</li> )
        : null;
        */
    return (
       <form className="pure-form pure-form-stacked">
        <fieldset className="inline">
          <legend><b>Diamond Information</b></legend>

          <label htmlFor="diaLength" className="pure-u-1-8">Length (mm)</label>
          <input id="diamondLength" name="length" className="pure-u-2-24" type="text" value={this.state.length} onChange={this.updateField.bind(this)} />
          <label htmlFor="diaWidth" className="pure-u-1-8">Width (mm)</label>
          <input id="diamondWidth" name="width" className="pure-u-2-24" type="text" value={this.state.width} onChange={this.updateField.bind(this)} />
          <label className="pure-u-1-24">Cut</label>
          <select name="ct" className="pure-u-4-24">
            <option value="1">Rounded</option>
            <option value="2">Squared</option>
          </select>
          <label className="pure-u-5-24">Total Grade (score)</label>
          <label className="pure-u-3-24"><b><span id="totalGrade">{this.props.grade.gia}</span> (<span id="totalScore">{this.props.grade.score}</span>)</b></label>
        </fieldset>
      </form>
    );
  }
}

DiamondForm.propTypes = {
  //items: PropTypes.array.isRequired
};

export default connect(state => {
  return state.get('diamond').toJS();
})(DiamondForm);




