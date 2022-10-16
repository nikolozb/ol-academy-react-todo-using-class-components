import "./App.css";
import React, { Component } from "react";

import Form from "./components/form/Form";
import Headings from "./components/headings/Headings";
import ListItem from "./components/list/ListItem";

const dummy_data = [
  { id: 0, description: "task1", isDone: true },
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

  // while clicked done button it changes isDone flag in todos array from false to true
  doneHandler = () => {
    const currentItem = this.state.todos.find((item) => {
      return item.id === this.state.currentId;
    });
    currentItem.isDone = true;
  };

  // while clicked delete button in the ListItem component it should filter out
  // an exact element from todos array, thus modify and update state
  deleteHandler = () => {
    const currentItem = this.state.todos.find((item) => {
      return item.id === this.state.currentId;
    });
    this.setState({
      todos: this.state.todos.filter((item) => {
        return item !== currentItem;
      }),
    });
  };

  // while clicked deletes all tasks from todos array
  // it is bound to 'clear all tasks' inside of the Headings component
  clearAllTasks = () => {
    this.setState({ todos: [] });
  };

  // while clicked deletes all tasks from todos array with a { isDone: false }
  // it is bound to 'clear incomplete tasks' inside of the Headings component
  clearIncompleteTasks = () => {
    const filterIncompleteTasks = this.state.todos.filter((item) => {
      return item.isDone;
    });

    this.setState({ todos: filterIncompleteTasks });
  };

  // while clicked deletes all tasks from todos array with a { isDone: true }
  // it is bound to 'clear completed tasks' inside of the Headings component
  clearCompletedTasks = () => {
    const filterIncompleteTasks = this.state.todos.filter((item) => {
      return !item.isDone;
    });

    this.setState({ todos: filterIncompleteTasks });
  };

  render() {
    return (
      <div className="app">
        {/* headings */}
        <Headings
          clearAllTasks={this.clearAllTasks}
          clearIncompleteTasks={this.clearIncompleteTasks}
          clearCompletedTasks={this.clearCompletedTasks}
        />
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
                doneHandler={this.doneHandler}
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
