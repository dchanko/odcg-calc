import React, {PropTypes} from "react";
import {connect} from './context';

export class GradeSummary extends React.Component {
  render() {
    return (
      <form className="pure-form pure-form-stacked">
        <fieldset className="inline">
          <legend>Current Inclusions</legend>
          <table className="pure-table pure-table-horizontal">
            <thead>
              <tr>
                <th></th>
                <th>Length</th>
                <th>Width</th>
                <th>Contrast</th>
                <th>Position</th>
                <th>Grade (Score)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td><a href="#">Change</a></td>
                <td>
                  <input type="hidden" /></td>
                <td>
                  <input type="hidden" /></td>
                <td>
                  <input type="range" min="-1" max="1" step=".01" readOnly="true" /></td>
                <td>
                  <input type="hidden" /></td>
                <td><b>Score</b></td>
                <td><a href="#">Remove</a></td>
              </tr>

            </tbody>
          </table>
        </fieldset>
      </form>
    );
  }
}

GradeSummary.propTypes = {
  //items: PropTypes.array.isRequired
};

export default connect(state => ({ items: state.items }))(GradeSummary);




