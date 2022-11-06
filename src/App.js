import React, { Component } from "react";
import Todo from "./components/Todo/Todo";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Todo />
      </div>
    );
  }
}

export default App;
