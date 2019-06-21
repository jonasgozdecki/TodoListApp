import React from "react";
import ListItem from "./ListItem";

const ListItems = props => {
  console.log("items", props.items);
  return (
    <ul className="list-items">
      {props.items.map(x => {
        return (
          <ListItem
            removeItem={props.removeItem}
            itemName={x.text}
            keyProp={x.id}
            checked={x.checked}
            handleChecked={props.handleChecked}
          />
        );
      })}
    </ul>
  );
};

export default ListItems;
