import React from "react";
import { Heading } from "./Heading";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Heading />
      <Counter displayText={"Current counter:"} />
    </div>
  );
}

export default App;
