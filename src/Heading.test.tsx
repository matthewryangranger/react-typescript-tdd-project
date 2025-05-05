import React from "react";
import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

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
