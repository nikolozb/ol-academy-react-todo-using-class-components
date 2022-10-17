import React, { Component } from "react";
import styles from "./Error.module.css";

class Error extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return <div className={styles.error}>Error: task already exists</div>;
  }
}

export default Error;
