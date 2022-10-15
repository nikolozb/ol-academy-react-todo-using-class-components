import "./App.css";
import React, { Component } from "react";

import Form from "./components/form/Form";
import Headings from "./components/headings/Headings";
import ListItem from "./components/list/ListItem";

const dummy_data = [
  { id: 0, description: "task1", isDone: false },
  { id: 1, description: "task2", isDone: false },
  { id: 2, description: "task3", isDone: false },
  { id: 3, description: "task4", isDone: false },
];
class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: dummy_data,
      currentId: 0,
    };
  }

  // gets index of the element from the component ListItem itself
  // and updates state
  getTodoId = (currentId) => {
    this.setState({ currentId: currentId });
  };

  // gets input value from Form component
  // it is bound to 'add todo' button inside of the form component
  // and adds new item to the todos array
  getInputValueFromForm = (data) => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        {
          id: Math.round(Math.random() * 1000),
          description: data,
          isDone: false,
        },
      ],
    }));
  };

  // while clicked delete button in the ListItem component it should filter out
  // an exact element from todos array, thus modify and update state
  deleteHandler = () => {
    const currentItem = this.state.todos.find((item) => {
      return item.id === this.state.currentId;
    });
    this.setState(
      {
        todos: this.state.todos.filter((item) => {
          return item !== currentItem;
        }),
      },
      () => {
        console.log(currentItem);
      }
    );
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
          {this.state.todos.map((item) => {
            return (
              <ListItem
                key={item.id}
                currentId={item.id}
                description={item.description}
                getTodoId={this.getTodoId}
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
