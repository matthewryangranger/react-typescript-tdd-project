import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello react", () => {
  render(<App />);
  const greeting = screen.getByText(/Hello, React/i);
  expect(greeting).toBeInTheDocument();
});
