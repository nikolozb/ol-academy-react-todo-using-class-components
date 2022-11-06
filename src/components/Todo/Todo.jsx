import React, { Component } from "react";

import ControlAllTodos from "../../components/ControlAllTodos/ControlAllTodos";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoItem from "../../components/TodoItem/TodoItem";
import UpdateTodoForm from "../../components/UpdateTodoForm/UpdateTodoForm";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import "./Todo.styles.scss";

const data = [
  { id: 1, title: "task1", isDone: false, isChecked: false },
  { id: 2, title: "task2", isDone: false, isChecked: false },
  { id: 3, title: "task3", isDone: false, isChecked: false },
  { id: 4, title: "task4", isDone: false, isChecked: false },
];

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      todos: data,
      currentItem: null,
      showUpdateForm: false,
      showError: false,
    };
  }

  addNewTodo = (inputTitle) => {
    const itemExists = this.state.todos.find(
      ({ title }) =>
        title.trim().toLocaleLowerCase() ===
        inputTitle.trim().toLocaleLowerCase()
    );

    this.setState({ showError: !!itemExists });
    if (!itemExists) {
      this.setState((prevState) => ({
        todos: [
          ...prevState.todos,
          {
            id: Math.round(Math.random() * 1000),
            title: inputTitle.trim(),
          },
        ],
        showError: false,
      }));
    }
  };

  deleteHandler = (todoId) => {
    this.setState({
      todos: this.state.todos.filter(({ id }) => id !== todoId),
      showError: false,
    });
  };

  editHandler = (todoId) => {
    this.setState({
      currentItem: this.state.todos.find(({ id }) => id === todoId),
      showUpdateForm: true,
    });
  };

  checkedHandler = (todoId) => {
    const item = this.state.todos.find(({ id }) => id === todoId);
    item.isChecked = !item.isChecked;
  };

  doneHandler = (todoId) => {
    const item = this.state.todos.find(({ id }) => id === todoId);
    item.isDone = !item.isDone;
  };

  updateHandler = (updatedTitle) => {
    const itemExists = this.state.todos.find(
      ({ title }) =>
        title.trim().toLocaleLowerCase() ===
        updatedTitle.trim().toLocaleLowerCase()
    );

    this.setState({ showError: !!itemExists });
    if (!itemExists) {
      this.setState((prevState) => {
        prevState.currentItem.title = updatedTitle.trim();
        prevState.showUpdateForm = false;
      });
    }
  };

  deleteAllTodosHandler = () => {
    this.setState({ todos: [] });
  };

  deleteCompletedTodosHandler = () => {
    this.setState({
      todos: this.state.todos.filter(({ isDone }) => !isDone),
    });
  };

  deleteIncompleteTodosHandler = () => {
    this.setState({
      todos: this.state.todos.filter(({ isDone }) => isDone),
    });
  };

  setTodos = (arr) => {
    this.setState({ todos: arr });
  };

  render() {
    return (
      <div className="todo">
        {/* show error */}

        <div className="todo__container">
          {/* form */}
          <TodoForm addNewTodo={this.addNewTodo} />
          {this.state.showError ? <ErrorMessage /> : null}
          {/* controlling all todos */}
          <ControlAllTodos
            deleteAllTodosHandler={this.deleteAllTodosHandler}
            deleteCompletedTodosHandler={this.deleteCompletedTodosHandler}
            deleteIncompleteTodosHandler={this.deleteIncompleteTodosHandler}
          />
        </div>
        {/* update todo */}
        {this.state.showUpdateForm ? (
          <UpdateTodoForm
            updateHandler={this.updateHandler}
            currentItem={this.state.currentItem}
          />
        ) : null}

        {/* list */}
        <ul className="todo__list">
          {" "}
          {this.state.todos.length > 0 ? (
            this.state.todos.map(({ id, title, isDone }) => {
              return (
                <TodoItem
                  checked={isDone}
                  key={id}
                  id={id}
                  title={title}
                  deleteHandler={this.deleteHandler}
                  editHandler={this.editHandler}
                  doneHandler={this.doneHandler}
                  checkedHandler={this.checkedHandler}
                  todos={this.state.todos}
                  setTodos={this.setTodos}
                />
              );
            })
          ) : (
            <h1 className="todo__empty">No Todos</h1>
          )}
        </ul>
      </div>
    );
  }
}

export default Todo;
