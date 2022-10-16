import React, { Component } from "react";
import styles from "./ListItem.module.css";

class ListItem extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  onDeleteClick = async () => {
    await this.props.getTodoId(this.props.currentId);
    await this.props.deleteHandler();
  };

  onDoneHandler = async () => {
    await this.props.getTodoId(this.props.currentId);
    await this.props.doneHandler();
  };

  onEditHandler = async () => {
    await this.props.getTodoId(this.props.currentId);
    await this.props.editHandler();
  };

  onMoveUpHandler = async () => {
    await this.props.getTodoId(this.props.currentId);
    await this.props.moveTaskUp();
  };

  onMoveDownHandler = async () => {
    await this.props.getTodoId(this.props.currentId);
    await this.props.moveTaskDown();
  };

  render() {
    return (
      <li className={styles["list-item"]}>
        <span className={styles["list-description"]}>
          {this.props.description}
        </span>
        <div className={styles["list-functional-block"]}>
          <button
            className={`${styles.btn} ${styles["list-button-edit"]}`}
            onClick={this.onEditHandler}
          >
            edit
          </button>
          <button
            className={`${styles.btn} ${styles["list-button-done"]}`}
            onClick={this.onDoneHandler}
          >
            done
          </button>
          <button
            className={`${styles.btn} ${styles["list-button-delete"]}`}
            onClick={this.onDeleteClick}
          >
            delete
          </button>
          <div className={styles["up-down-buttons"]}>
            <span
              onClick={this.onMoveUpHandler}
              className={`${styles["arrow-btn"]} ${styles.up}`}
            ></span>
            <span
              onClick={this.onMoveDownHandler}
              className={`${styles["arrow-btn"]} ${styles.down}`}
            ></span>
          </div>
        </div>
      </li>
    );
  }
}

export default ListItem;
