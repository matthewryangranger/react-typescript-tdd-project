import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Counter from "./Counter";

test("renders hello react with a counter", () => {
  render(<App />);
  render(<Counter />);
  const greeting = screen.getByText(/Hello, React/i);
  expect(greeting).toBeInTheDocument();
  const span = screen.getByText("Current counter:");
  expect(span).toBeInTheDocument();
});
