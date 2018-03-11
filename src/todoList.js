import React, { Component } from "react";
import TodoItems from "./todoItems";
 
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
   
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    var task = e.target.task.value;

    if (task !== "") {
      var newItem = {
        text: task,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });

      e.target.task.value = "";
    }
       
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input id="task" name="task" placeholder="Enter task" autoComplete="off" >
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;