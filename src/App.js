import "./App.css";
import React, { Component } from "react";

import Form from "./components/form/Form";
import Error from "./components/error/Error";
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
      showEdit: false,
      errorMsg: false,
    };
  }

  // updates: { errorMsg: false }
  updateErrorMsg = () => {
    this.setState({ errorMsg: false });
  };

  // functions for controlling order of tasks
  // move up
  moveTaskUp = () => {
    const currentItem = this.getCurrentItem();
    const indexOfCurrentElement = this.state.todos.indexOf(currentItem);
    const indexOfMovedElement = indexOfCurrentElement - 1;
    if (indexOfMovedElement === -1) {
      this.updateErrorMsg();
      return;
    } else {
      const newArray = this.state.todos.filter((item) => {
        return this.state.todos.indexOf(item) !== indexOfCurrentElement;
      });
      newArray.splice(indexOfMovedElement, 0, currentItem);
      this.setState({ todos: newArray });
    }
  };
  // move down
  moveTaskDown = () => {
    const currentItem = this.getCurrentItem();
    const indexOfCurrentElement = this.state.todos.indexOf(currentItem);
    const indexOfMovedElement = indexOfCurrentElement + 1;
    const newArray = this.state.todos.filter((item) => {
      return this.state.todos.indexOf(item) !== indexOfCurrentElement;
    });
    newArray.splice(indexOfMovedElement, 0, currentItem);
    this.setState({ todos: newArray });
    this.updateErrorMsg();
  };

  // gets index of the element from the component ListItem itself
  // and updates state
  getTodoId = (currentId) => {
    this.setState({ currentId: currentId });
  };

  // gets input value from Form component
  // it is bound to 'add todo' button inside of the form component
  // and adds new item to the todos array
  getInputValueFromForm = (data) => {
    const id = Math.round(Math.random() * 1000);

    // checks whether any of the todos include same text as is data
    const checked = this.state.todos.map((item) => {
      if (item.description.toLocaleLowerCase() === data.toLocaleLowerCase()) {
        return true;
      }
      return false;
    });

    // whether checked array includes true app won't rerender
    // otherwise it will be updated
    if (checked.includes(true)) {
      this.setState({ errorMsg: true });
      return;
    } else {
      this.setState((prevState) => ({
        todos: [
          ...prevState.todos,
          {
            id: id,
            description: data,
            isDone: false,
          },
        ],
        errorMsg: false,
      }));
    }
  };

  // gets exact element from list of items, could be used with any function that requires current el
  getCurrentItem = () => {
    return this.state.todos.find((item) => {
      return item.id === this.state.currentId;
    });
  };

  // while clicked update it changes containing text of current element
  updateHandler = (data) => {
    const currentItem = this.getCurrentItem();
    currentItem.description = data;
    this.setState({ showEdit: false });
    this.updateErrorMsg();
  };

  // while clicked edit input pops out and we are able to update its containing text
  editHandler = () => {
    this.setState({ showEdit: true });
    this.updateErrorMsg();
  };

  // while clicked done button it changes isDone flag in todos array from false to true
  doneHandler = () => {
    const currentItem = this.getCurrentItem();
    currentItem.isDone = true;
    this.updateErrorMsg();
  };

  // while clicked delete button in the ListItem component it should filter out
  // an exact element from todos array, thus modify and update state
  deleteHandler = () => {
    const currentItem = this.getCurrentItem();
    this.setState({
      todos: this.state.todos.filter((item) => {
        return item !== currentItem;
      }),
    });
    this.updateErrorMsg();
  };

  // while clicked deletes all tasks from todos array
  // it is bound to 'clear all tasks' inside of the Headings component
  clearAllTasks = () => {
    this.setState({ todos: [] });
    this.updateErrorMsg();
  };

  // while clicked deletes all tasks from todos array with a { isDone: false }
  // it is bound to 'clear incomplete tasks' inside of the Headings component
  clearIncompleteTasks = () => {
    const filterIncompleteTasks = this.state.todos.filter((item) => {
      return item.isDone;
    });

    this.setState({ todos: filterIncompleteTasks });
    this.updateErrorMsg();
  };

  // while clicked deletes all tasks from todos array with a { isDone: true }
  // it is bound to 'clear completed tasks' inside of the Headings component
  clearCompletedTasks = () => {
    const filterIncompleteTasks = this.state.todos.filter((item) => {
      return !item.isDone;
    });

    this.setState({ todos: filterIncompleteTasks });
    this.updateErrorMsg();
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
        {/* form */}
        <Form
          getInputValueFromForm={this.getInputValueFromForm}
          buttonName="add todo"
        />
        {/* error message */}
        {this.state.errorMsg && <Error />}
        {/* update form */}
        {this.state.showEdit && (
          <Form
            getInputValueFromForm={this.getInputValueFromForm}
            buttonName="update"
            updateHandler={this.updateHandler}
          />
        )}
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
                editHandler={this.editHandler}
                moveTaskUp={this.moveTaskUp}
                moveTaskDown={this.moveTaskDown}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
