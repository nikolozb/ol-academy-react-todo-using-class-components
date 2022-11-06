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
    return (
      <li className="todo-item">
        <span className="todo-item__title">
          <input
            type="checkbox"
            value={this.state.check}
            onClick={() => this.props.checkedHandler(this.props.id)}
          />
          {this.props.title}
        </span>
        <div className="todo-item__buttons">
          <button
            className="btn todo-item__done"
            onClick={() => this.props.doneHandler(this.props.id)}
          >
            done
          </button>
          <button
            className="btn todo-item__edit"
            onClick={() => this.props.editHandler(this.props.id)}
          >
            edit
          </button>
          <button
            className="btn todo-item__delete"
            onClick={() => this.props.deleteHandler(this.props.id)}
          >
            delete
          </button>
          <MoveTasks
            id={this.props.id}
            todos={this.props.todos}
            setTodos={this.props.setTodos}
          />
        </div>
      </li>
    );
  }
}

export default TodoItem;
