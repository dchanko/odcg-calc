import React from "react";
import CommandPrompt from "./CommandPrompt.react";
import ItemList from "./ItemList.react";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <CommandPrompt />
        <ItemList />
      </div>
    );
  }
}

export default Home;
