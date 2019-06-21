import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  render() {
    return (
      <div className="flex list-item">
        <input
          type="checkbox"
          onClick={() => {
            this.props.handleChecked(this.props.keyProp);
          }}
        />
        <li key={this.props.keyProp}>
          {!this.props.checked ? (
            this.props.itemName
          ) : (
            <strike>{this.props.itemName}</strike>
          )}
        </li>
        <button
          className="remove-button"
          onClick={() => {
            this.props.removeItem(this.props.keyProp);
          }}
        >
          X
        </button>
      </div>
    );
  }
}

// const ListItem = props => {
//   return (
//     <div className="flex list-item">
//       <li key={props.keyProp}>{props.itemName}</li>
//       <button
//         className="remove-button"
//         onClick={() => {
//           props.removeItem(props.keyProp);
//         }}>
//         X
//       </button>
//     </div>
//   );
// };

export default ListItem;
