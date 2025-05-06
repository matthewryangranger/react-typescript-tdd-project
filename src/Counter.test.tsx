import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("render a label and a counter", () => {
  render(<Counter />);
  const label = screen.getByLabelText("Count");
  expect(label).toBeInTheDocument();
  const counter = screen.getByPlaceholderText("1");
  expect(counter).toBeInTheDocument();
});
test("render counter with custom label", () => {
  render(<Counter label={`Current`} />);
  const label = screen.getByLabelText("Current");
  expect(label).toBeInTheDocument();
  const counter = screen.getByPlaceholderText("1");
  expect(counter).toBeInTheDocument();
});
