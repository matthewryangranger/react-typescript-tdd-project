import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello react with a counter", () => {
  render(<App />);
  const greeting = screen.getByText(/Hello, React/i);
  expect(greeting).toBeInTheDocument();
  const label = screen.getByLabelText("Current:");
  expect(label).toBeInTheDocument();
});
