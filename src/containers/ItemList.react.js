import React, {PropTypes} from "react";
import {connect} from './context';

export class ItemList extends React.Component {
  render() {
    /*
    const cmd = this.props.command;
    let pendingItem = (cmd.type === "add" && cmd.text.length > 0)
        ? ( <li key="-1">{cmd.text}</li> )
        : null;
        */
    return (
      <ul>
        {this.props.items.map((item, idx) => (
          <li key={idx}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default connect(state => ({ items: state.items }))(ItemList);




