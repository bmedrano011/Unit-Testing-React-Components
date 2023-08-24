import { render, screen } from "@testing-library/react";
import Message from "../Message";
import React from "react";

test("displays message", () => {
  render(<Message text="Hello World" />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
