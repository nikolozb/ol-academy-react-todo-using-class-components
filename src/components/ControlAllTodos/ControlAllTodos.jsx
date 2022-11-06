import React, { Component } from "react";

import "./ControlAllTodos.styles.scss";

class ControlAllTodos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      deleteAllTodosHandler,
      deleteCompletedTodosHandler,
      deleteIncompleteTodosHandler,
    } = this.props;

    return (
      <div className="control">
        <button onClick={deleteAllTodosHandler} className="control__btn">
          delete all todos
        </button>
        <button onClick={deleteCompletedTodosHandler} className="control__btn">
          delete completed
        </button>
        <button onClick={deleteIncompleteTodosHandler} className="control__btn">
          delete incomplete
        </button>
      </div>
    );
  }
}

export default ControlAllTodos;
