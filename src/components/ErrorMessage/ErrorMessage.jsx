import React, { Component } from "react";

import "./ErrorMessage.styles.scss";

class ErrorMessage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="error-message">
        <span className="error-message__title">
          Todo with the same name already exists
        </span>
      </div>
    );
  }
}

export default ErrorMessage;
