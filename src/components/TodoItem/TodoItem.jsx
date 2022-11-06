import React, { Component } from "react";

import MoveTasks from "../../components/MoveTasks/MoveTasks";

import "./TodoItem.styles.scss";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      check: this.props.checked,
    };
  }

  render() {
    const {
      checkedHandler,
      doneHandler,
      editHandler,
      deleteHandler,
      id,
      todos,
      setTodos,
    } = this.props;

    return (
      <li className="todo-item">
        <span className="todo-item__title">
          <input
            type="checkbox"
            value={this.state.check}
            onClick={() => checkedHandler(id)}
          />
          {this.props.title}
        </span>
        <div className="todo-item__buttons">
          <button
            className="btn todo-item__done"
            onClick={() => doneHandler(id)}
          >
            done
          </button>
          <button
            className="btn todo-item__edit"
            onClick={() => editHandler(id)}
          >
            edit
          </button>
          <button
            className="btn todo-item__delete"
            onClick={() => deleteHandler(id)}
          >
            delete
          </button>
          <MoveTasks id={id} todos={todos} setTodos={setTodos} />
        </div>
      </li>
    );
  }
}

export default TodoItem;
