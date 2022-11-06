import React, { Component } from "react";

import "./TodoForm.styles.scss";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  inputChangeHandler = (event) => {
    this.setState({ input: event.target.value });
  };

  addTodoClickHandler = () => {
    if (!this.state.input) return;
    this.props.addNewTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    const { inputChangeHandler, addTodoClickHandler } = this;
    const { input } = this.state;

    return (
      <div className="todo-form">
        <input
          type="text"
          value={input}
          onChange={inputChangeHandler}
          className="todo-form__input"
          placeholder="New todo..."
        />
        <button
          type="submit"
          onClick={addTodoClickHandler}
          className="btn todo-form__button"
        >
          add todo
        </button>
      </div>
    );
  }
}

export default TodoForm;
