import React from "react";

export default class InclusionPosition extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Inclusion Position</legend>
        <div className="pure-g center">
          <div className="pure-u-1-4">
            <input type="radio" name="o" value="1" />
          </div>
          <div className="pure-u-1-4">
            <input type="radio" name="o" value="2" />
          </div>
          <div className="pure-u-1-4">
            <input type="radio" name="o" value="3" />
          </div>
          <div className="pure-u-1-4">
            <input type="radio" name="o" value="4" />
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
