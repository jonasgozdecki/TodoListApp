import React, { Component } from "react";
import Form from "./components/Form";
import ListItems from "./components/ListItems";
import uuid from "uuid/v1";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: 0,
        text: "",
        checked: false
      },
      items: [],
      filteredList: [],
      query: ""
    };
    // unique ids
    this.id = uuid();
    // used for filtering
    /// this.query = "";
    //Preserve this binding
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  // function to add item
  addItem(item) {
    //  console.log(uuid());
    if (!!item) {
      console.log("additem", item);
      this.setState(
        {
          item: {
            id: uuid(),
            text: item,
            checked: false
          }
        },
        function() {
          this.state.items.push(this.state.item);
          this.setState({
            items: this.state.items
          });
        }
      );
      //   console.log(this.id);
    }
  }

  // function to remove item
  removeItem(key) {
    //console.log("key", key);
    let filteredArray = this.state.items.filter(x => x.id !== key);
    this.setState({
      items: filteredArray
    });
    //this.id--;
  }

  // function to handle change in filter input box
  handleChange(e) {
    this.setState({
      query: e.target.value
    });
    console.log("query", this.state.query);
    if (!!e.target.value) {
      this.query = e.target.value.toLowerCase();
      let searchList = this.state.items;
      console.log(searchList);
      let ff = searchList.filter(x => {
        return x.text.toLowerCase().includes(this.query);
      });
      console.log(ff);
      this.setState(
        {
          filteredList: ff
        },
        () => {
          console.log("handlechange", this.state.filteredList);
        }
      );
    }
  }

  handleChecked(key) {
    let checkedItem = this.state.items.find(x => {
      return x.id === key;
    });
    let index = this.state.items.indexOf(checkedItem);
    checkedItem.checked = !checkedItem.checked;
    this.setState(
      {
        item: checkedItem
      },
      () => {
        let newList = this.state.items;
        newList[index] = checkedItem;
        this.setState({
          items: newList
        });
      }
    );
  }

  render() {
    return (
      <div>
        <Header title="React Todo App" description="The Best Todo App " />
        <Form addItem={this.addItem} handleChange={this.handleChange} />
        <ListItems
          items={!this.state.query ? this.state.items : this.state.filteredList}
          removeItem={this.removeItem}
          uniqueKey={this.id}
          handleChecked={this.handleChecked}
        />
      </div>
    );
  }
}

export default App;
