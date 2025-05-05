import React from "react";
import { render, screen } from "@testing-library/react";
import MyApp, { Heading } from "./MyApp";

test("renders hello react", () => {
  render(<MyApp />);
  const greeting = screen.getByText(/Hello, React/i);
  expect(greeting).toBeInTheDocument();
});

test("render heading", () => {
  render(<Heading />);
  const greeting = screen.getByText(/Hello, React/i);
  expect(greeting).toBeInTheDocument();
});

test("render heading with argument", () => {
  render(<Heading name={`World`} />);
  const greeting = screen.getByText(/Hello, World/i);
  expect(greeting).toBeInTheDocument();
});
