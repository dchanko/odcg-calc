import React from "react";
import calculatorActions from '../actions/calculatorActions';

export default class InclusionDimensions extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      length: this.props.length,
      width: this.props.width
    };
  }
  updateField(event) {
    this.setState({ [event.target.name]: event.target.value });
    calculatorActions.inclusionUpdated({[event.target.name]: (parseFloat(event.target.value) || 0)});
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
