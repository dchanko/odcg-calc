import React from "react";

export default class InclusionDimensions extends React.Component {
  render() {
    return (
      <fieldset className="inline">
        <legend><b>Add an Inclusion</b></legend>
        <label htmlFor="length" className="pure-u-1-8">Length (mm)</label>
        <input name="l" className="pure-u-2-24" type="text" />
        <label htmlFor="width" className="pure-u-1-8">Width (mm)</label>
        <input name="d" className="pure-u-2-24" type="text" />
        <label className="pure-u-1-24"></label>
        <label className="pure-u-4-24"></label>
        <label className="pure-u-5-24">Partial Grade (score)</label>
        <label className="pure-u-3-24"><b></b></label>
      </fieldset>
    );
  }
};
