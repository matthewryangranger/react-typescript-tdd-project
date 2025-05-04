import React from "react";

export function label(text: string) {
  return `Hello, ${text.toUpperCase()}`;
}

function MyApp() {
  return (
    <div>
      <h1>{label("React")}</h1>
    </div>
  );
}

export default MyApp;
