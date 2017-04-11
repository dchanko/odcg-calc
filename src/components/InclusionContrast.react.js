import React from "react";
import calculatorActions from '../actions/calculatorActions';

export default class InclusionContrast extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      contrast: this.props.contrast,
    };
  }
  updateField(event) {
    this.setState({ [event.target.name]: event.target.value });
    let contrastAdjustment = parseFloat(event.target.value);
    if (contrastAdjustment < 0) {
      contrastAdjustment *= 2;
    }
    calculatorActions.inclusionUpdated({ [event.target.name]: contrastAdjustment });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.contrast - this.state.contrast > 0.05) {
      this.setState({ contrast: nextProps.contrast });
    }
  }
  render() {
    return (
      <fieldset>
        <legend>Inclusion Contrast</legend>
        <div className="pure-g center">
          <div className="pure-u-4-24">
            &nbsp;
          </div>
          <input className="pure-u-16-24" type="range" name="contrast" min="-1" max="1" step=".05" value={this.state.contrast} onChange={this.updateField.bind(this)}/>
          <div className="pure-u-4-24">
            &nbsp;
          </div>
          <div className="pure-u-2-24">
            &nbsp;
          </div>
          <div className="pure-u-4-24">
            Low contrast; difficult to observe with overhead lighting; e.g. a 'cloud'.
          </div>
          <div className="pure-u-4-24 faint">
            In between a cloud and typical crystals and feathers.
          </div>
          <div className="pure-u-4-24">
            Typical contrast of a clear or white crystal or feather as seen with overhead lighting.
          </div>
          <div className="pure-u-4-24 faint">
            A more solid white or darker than usual crystal or feather between typical and high contrast.
          </div>
          <div className="pure-u-4-24">
            High contrast with overhead lighting; black on a light background or a bright reflector on a dark background.
          </div>
        </div>
      </fieldset>
    );
  }
};
