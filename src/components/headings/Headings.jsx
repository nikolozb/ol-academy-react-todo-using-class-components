import React, { Component } from "react";
import styles from "./Headings.module.css";

class Headings extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.headings}>
        <div>
          <div className={styles.heading1}>TODO</div>
          <div className={styles.heading2}>Todo app written using ReactJS</div>
        </div>
        <div className={styles["buttons-block"]}>
          <button
            className={`${styles.btn} ${styles["clear-tasks"]}`}
            onClick={this.props.clearAllTasks}
          >
            Clear all tasks
          </button>
          <button className={`${styles.btn} ${styles["clear-tasks"]}`}>
            Clear completed tasks
          </button>
          <button
            className={`${styles.btn} ${styles["clear-tasks"]}`}
            onClick={this.props.clearIncompleteTasks}
          >
            Clear incomplete tasks
          </button>
        </div>
      </div>
    );
  }
}

export default Headings;
