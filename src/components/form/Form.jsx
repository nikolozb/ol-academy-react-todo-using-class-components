import React, { Component } from "react";
import styles from "./Form.module.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  // gets input value and updates state
  getInput = (event) => {
    this.setState({ value: event.target.value });
  };

  clearInputField = () => {
    if (this.state.value) {
      this.props.getInputValueFromForm(this.state.value);
      this.setState({ value: "" });
    } else {
      return;
    }
  };

  render() {
    return (
      <div className={styles.form}>
        <span className={styles["form-heading"]}>Add new Todo</span>
        <div className={styles["form-functional-block"]}>
          <input
            type="text"
            className={styles["form-input"]}
            value={this.state.value}
            onChange={this.getInput}
          />
          <button
            className={`${styles.btn} ${styles["form-button-add"]}`}
            onClick={this.clearInputField}
          >
            add todo
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
