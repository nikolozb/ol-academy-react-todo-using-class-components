import React, { Component } from "react";

import "./UpdateTodoForm.styles.scss";

class UpdateTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: this.props.currentItem.title,
    };
  }

  inputChangeHandler = (event) => {
    this.setState({ input: event.target.value });
  };

  onUpdateClickHandler = () => {
    if (!this.state.input) return;
    this.setState({ input: "" });
    this.props.updateHandler(this.state.input);
  };

  render() {
    const { inputChangeHandler, onUpdateClickHandler } = this;
    const { input } = this.state;
    return (
      <div className="update-todo">
        <input
          type="text"
          value={input}
          onChange={inputChangeHandler}
          className="update-todo__input"
        />
        <button
          type="submit"
          onClick={onUpdateClickHandler}
          className="btn update-todo__button"
        >
          update
        </button>
      </div>
    );
  }
}

export default UpdateTodoForm;
