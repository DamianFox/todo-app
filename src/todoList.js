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

  componentDidMount() {
    const cachedTodos = localStorage.getItem('todos');

    if (cachedTodos !== null) {
      this.setState({ items: JSON.parse(cachedTodos) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.items));
  }

  addItem(e) {
    e.preventDefault();
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
        <h1>Todo List</h1>
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