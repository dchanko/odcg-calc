import React, { PropTypes } from "react";
import { connect } from './context';
import InclusionContrast from '../components/InclusionContrast.react';
import InclusionDimensions from '../components/InclusionDimensions.react';
import InclusionPosition from '../components/InclusionPosition.react';
import commandActions from '../actions/commandActions';

export class InclusionForm extends React.Component {
  render() {
    return (
      <form className="pure-form pure-form-stacked">
        <InclusionDimensions />
        <InclusionContrast />
        <InclusionPosition />
        <fieldset className="inline">
          <input type="submit" className="pure-button pure-button-primary" name="action" value="Calculate" />
          <input type="submit" className="pure-button pure-button-primary" name="action" value="Add" />
        </fieldset>
      </form>
    );
  }
}

InclusionForm.propTypes = {
  //command: PropTypes.object.isRequired
};

export default connect(state => ({ command: state.command }))(InclusionForm);




