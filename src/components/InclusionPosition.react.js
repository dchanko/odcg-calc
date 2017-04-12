import React from "react";
import calculatorActions from '../actions/calculatorActions';

export default class InclusionPosition extends React.Component {
  updateField(event) {
    calculatorActions.inclusionUpdated({[event.target.name]: parseInt(event.target.value)});
  }
  render() {
    const data = this.props.data;
    const position = data.get('position');
    return (
      <fieldset>
        <legend>Inclusion Position</legend>
        <div className="pure-g center">
          <div className="pure-u-1-4">
            <input type="radio" name="position" value="1" onChange={this.updateField.bind(this)} checked={position == 1}/>
          </div>
          <div className="pure-u-1-4">
            <input type="radio" name="position" value="2" onChange={this.updateField.bind(this)} checked={position == 2}/>
          </div>
          <div className="pure-u-1-4">
            <input type="radio" name="position" value="3" onChange={this.updateField.bind(this)} checked={position == 3}/>
          </div>
          <div className="pure-u-1-4">
            <input type="radio" name="position" value="4" onChange={this.updateField.bind(this)} checked={position == 4}/>
          </div>
          <div className="pure-u-1-4">
            Inside the table or outside the table within the length of the star facet (1).
          </div>
          <div className="pure-u-1-4">
            Outside the length of the star facet from the table and in the inner half of the girdle and main facets (2).
          </div>
          <div className="pure-u-1-4">
            In the outer half of the main and girdle facets (3).
          </div>
          <div className="pure-u-1-4">
            Touching or almost touching the girdle (4).
          </div>
        </div>
      </fieldset>
    );
  }
};
