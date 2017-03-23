import React, {PropTypes} from "react";
import { connect } from './context';
import calculatorActions from '../actions/calculatorActions';

export class DiamondForm extends React.Component {
  updateField(event) {
    calculatorActions.diamondUpdated(event.target.name, event.target.value);
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
          <input name="length" className="pure-u-2-24" type="text" value={this.props.length} onChange={this.updateField} />
          <label htmlFor="diaWidth" className="pure-u-1-8">Width (mm)</label>
          <input name="width" className="pure-u-2-24" type="text" value={this.props.width} onChange={this.updateField} />
          <label className="pure-u-1-24">Cut</label>
          <select name="ct" className="pure-u-4-24">
            <option value="1">Rounded</option>
            <option value="2">Squared</option>
          </select>
          <label className="pure-u-5-24">Total Grade (score)</label>
          <label className="pure-u-3-24"><b><span id="totalGrade"></span> (<span id="totalScore"></span>)</b></label>
        </fieldset>
      </form>
    );
  }
}

DiamondForm.propTypes = {
  //items: PropTypes.array.isRequired
};

export default connect(state => state.get('diamond'))(DiamondForm);




