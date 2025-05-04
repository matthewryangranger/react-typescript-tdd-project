import React from "react";
import { render, screen } from "@testing-library/react";
import MyApp, { label } from "./MyApp";

test("renders hello react", () => {
  render(<MyApp />);
  const greeting = screen.getByText(/Hello, React/i);
  expect(greeting).toBeInTheDocument();
});

test("generates a label", () => {
  const result = label("React");
  expect(result).toEqual("Hello, REACT");
});
