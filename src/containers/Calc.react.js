import React from "react";
import DiamondForm from "./DiamondForm.react";
import InclusionForm from "./InclusionForm.react";
import GradeSummary from "./GradeSummary.react";

export class Calc extends React.Component {
  render() {
    return (

        <article>

          <header className="entry-header">
            <h1 className="entry-title">
              Objective Diamond Clarity Grading Calculator
            </h1>
          </header>

          <div className="entry-content">
            <DiamondForm />
            <InclusionForm />
            <GradeSummary />
          </div>

        </article>

    );
  }
}

export default Calc;
