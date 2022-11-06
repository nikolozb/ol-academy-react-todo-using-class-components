import React, { Component } from "react";

import "./MoveTasks.styles.scss";

class MoveTasks extends Component {
  constructor(props) {
    super(props);
  }

  onMoveHandler = (isUp) => {
    const { todos, id, setTodos } = this.props;
    const currentElement = todos.find((item) => item.id === id);
    let indexOfCurrentElement = todos.indexOf(currentElement);
    let indexOfMovedElement = isUp
      ? indexOfCurrentElement - 1
      : indexOfCurrentElement + 1;
    if (indexOfMovedElement === -1) {
      return;
    } else {
      const newArray = todos.filter((item) => {
        return todos.indexOf(item) !== indexOfCurrentElement;
      });
      newArray.splice(indexOfMovedElement, 0, currentElement);
      setTodos(newArray);
    }
  };

  render() {
    return (
      <div className="up-down-buttons">
        <span
          onClick={() => this.onMoveHandler(true)}
          className="arrow-btn up"
        ></span>
        <span
          onClick={() => this.onMoveHandler(false)}
          className="arrow-btn down"
        ></span>
      </div>
    );
  }
}

export default MoveTasks;
