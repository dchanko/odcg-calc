import React, {PropTypes} from "react";
import { connect } from './context';
import calculatorActions from '../actions/calculatorActions';

export class DiamondForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    const data = props.data;
    this.state = {
      length: data.get('length'),
      width: data.get('width')
    };
  }
  updateField(event) {
    this.setState({ [event.target.name]: event.target.value });
    calculatorActions.diamondUpdated({[event.target.name]: (parseFloat(event.target.value) || '')});
  }
  componentWillReceiveProps(nextProps) {
    const data = nextProps.data;
    if (data.get('length') != 0 && parseFloat(this.state.length) != data.get('length')) {
      this.setState({ length: data.get('length') });
    }
    if (data.get('width') != 0 && parseFloat(this.state.width) != data.get('width')) {
      this.setState({ width: data.get('width') });
    }
  }
  render() {
    const data = this.props.data;
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
          <label className="pure-u-3-24"><b><span id="totalGrade">{data.get('grade').get('gia')}</span> (<span id="totalScore">{data.get('grade').get('score')}</span>)</b></label>
        </fieldset>
      </form>
    );
  }
}

DiamondForm.propTypes = {
  data: PropTypes.object.isRequired
};

export default connect(state => {
  return {
    data: state.get('diamond')
  };
})(DiamondForm);




