import React, { Component } from "react";
import TodoItems from "./todoItems";
 
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
   
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    var task = e.target.task.value;

    // console.log("task", task);

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
       
    // console.log(this.state.items);
       
    e.preventDefault();
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input id="task" name="task" placeholder="Enter task" autoComplete="off" >
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}/>
      </div>
    );
  }
}

export default TodoList;