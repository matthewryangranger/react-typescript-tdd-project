import React from "react";
import { render, screen } from "@testing-library/react";
import MyApp from "./MyApp";

test("renders hello react", () => {
  render(<MyApp />);
  const greeting = screen.getByText(/Hello, React/i);
  expect(greeting).toBeInTheDocument();
});
