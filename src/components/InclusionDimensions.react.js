import React from "react";
import calculatorActions from '../actions/calculatorActions';

export default class InclusionDimensions extends React.Component {
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
    calculatorActions.inclusionUpdated({[event.target.name]: (parseFloat(event.target.value) || 0)});
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
    return (
      <fieldset className="inline">
        <legend><b>Add an Inclusion</b></legend>
        <label htmlFor="length" className="pure-u-1-8">Length (mm)</label>
        <input id="inclusionLength" name="length" className="pure-u-2-24" type="text" value={this.state.length} onChange={this.updateField.bind(this)} />
        <label htmlFor="width" className="pure-u-1-8">Width (mm)</label>
        <input id="inclusionWidth" name="width" className="pure-u-2-24" type="text" value={this.state.width} onChange={this.updateField.bind(this)} />
        <label className="pure-u-1-24"></label>
        <label className="pure-u-4-24"></label>
        <label className="pure-u-5-24">Partial Grade (score)</label>
        <label className="pure-u-3-24"><b></b></label>
      </fieldset>
    );
  }
};
