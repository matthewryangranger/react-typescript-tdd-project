import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("render display text with counter value", () => {
  render(<Counter />);
  const paragraphElement = screen.getByText("Count");
  expect(paragraphElement).toBeInTheDocument();
  const counter = screen.getByRole("textbox");
  expect(counter).toBeInTheDocument();
});

test("render counter with custom display text", () => {
  render(<Counter displayText={`Current`} />);
  const paragraphElement = screen.getByText("Current");
  expect(paragraphElement).toBeInTheDocument();
  const counter = screen.getByRole("textbox");
  expect(counter).toBeInTheDocument();
});

test("counter should start at zero", () => {
  render(<Counter />);
  const counter = screen.getByRole("textbox");
  expect(counter).toHaveTextContent("0");
});
