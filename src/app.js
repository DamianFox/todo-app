import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoList from "./todoList";

class Homepage extends Component {
    
    render() {
        return (
            <TodoList/>
        );
    }
}

var app = document.getElementById("container");
ReactDOM.render(<Homepage />, app);