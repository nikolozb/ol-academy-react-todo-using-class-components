import "./App.css";
import React, { Component } from "react";

import Form from "./components/form/Form";
import Headings from "./components/headings/Headings";
import ListItem from "./components/list/ListItem";

const dummy_data = [
  { description: "task1" },
  { description: "task2" },
  { description: "task3" },
  { description: "task4" },
];
class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: dummy_data,
      index: 0,
    };
  }

  // gets index of the element from the component ListItem itself
  // and updates state
  getTodoIndex = (index) => {
    this.setState({ index: index });
  };

  // gets input value from Form component
  // it is bound to 'add todo' button inside of the form component
  // and adds new item to the todos array
  getInputValueFromForm = (data) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, { description: data }],
    }));
  };

  // while clicked delete button in the ListItem component it should filter out
  // an exact element from todos array, thus modify and update state
  deleteHandler = () => {
    this.setState({
      todos: this.state.todos.filter((item) => {
        return item !== this.state.todos[this.state.index];
      }),
    });
  };

  // while clicked deletes all tasks from todos array
  // it is bound to 'clear all tasks' inside of the Headings component
  clearAllTasks = () => {
    this.setState({ todos: [] });
  };

  render() {
    return (
      <div className="app">
        {/* headings */}
        <Headings clearAllTasks={this.clearAllTasks} />
        {/* list */}
        <ul className="list">
          {this.state.todos.map((item, index) => {
            return (
              <ListItem
                key={index}
                index={index}
                description={item.description}
                getTodoIndex={this.getTodoIndex}
                deleteHandler={this.deleteHandler}
              />
            );
          })}
        </ul>
        {/* form */}
        <Form
          getInputValueFromForm={this.getInputValueFromForm}
          deleteHandler={this.deleteHandler}
        />
      </div>
    );
  }
}

export default App;
