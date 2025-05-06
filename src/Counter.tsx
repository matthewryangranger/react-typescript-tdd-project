import React, { Component } from "react";

export type CounterProps = { displayText?: string };

class Counter extends Component<CounterProps> {
  render() {
    const { displayText = "Count" } = this.props;
    return (
      <div>
        <p>
          {displayText}{" "}
          <span id="counter" role="textbox">
            0
          </span>
        </p>
      </div>
    );
  }
}

export default Counter;
