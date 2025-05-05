import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <label htmlFor="counter">Count</label>
        <input type="text" id="counter" placeholder="1"></input>
      </div>
    );
  }
}

export default Counter;
