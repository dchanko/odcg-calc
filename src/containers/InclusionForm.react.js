import React, { PropTypes } from "react";
import { connect } from './context';
import InclusionContrast from '../components/InclusionContrast.react';
import InclusionDimensions from '../components/InclusionDimensions.react';
import InclusionPosition from '../components/InclusionPosition.react';
import calculatorActions from '../actions/calculatorActions';

export class InclusionForm extends React.Component {
  render() {
    return (
      <form className="pure-form pure-form-stacked">
        <InclusionDimensions {...this.props}/>
        <InclusionContrast {...this.props} />
        <InclusionPosition {...this.props} />
        <fieldset className="inline">
          <input type="submit" className="pure-button pure-button-primary" name="action" value="Calculate" />
          <input type="submit" className="pure-button pure-button-primary" name="action" value="Add" />
        </fieldset>
      </form>
    );
  }
}

InclusionForm.propTypes = {
  data: PropTypes.object.isRequired
};

export default connect(state => {
  return {
    data: state.get('inclusions').get(state.get('inclusionIndex'))
  };
})(InclusionForm);



