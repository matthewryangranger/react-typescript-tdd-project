import React from "react";
import { render, screen } from "@testing-library/react";
import MyApp from "./MyApp";

test("renders hello react", () => {
  render(<MyApp />);
  const linkElement = screen.getByText(/Hello, React/i);
  expect(linkElement).toBeInTheDocument();
});
