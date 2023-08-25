// components/Counter.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

test("renders initial count and buttons", () => {
  render(<Counter />);

  // Initial count should be 0
  const countElement = screen.getByText("Count: 0");
  expect(countElement).toBeInTheDocument();

  // Buttons should be present
  const incrementButton = screen.getByText("Increment");
  const decrementButton = screen.getByText("Decrement");
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
});

test("increments and decrements count", () => {
  render(<Counter />);

  const countElement = screen.getByText("Count: 0");
  const incrementButton = screen.getByText("Increment");
  const decrementButton = screen.getByText("Decrement");

  // Test increment
  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent("Count: 1");

  // Test decrement
  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent("Count: 0");
});

test("increments and decrements count using waitFor", async () => {
  render(<Counter />);

  const countElement = screen.getByText("Count: 0");
  const incrementButton = screen.getByText("Increment");
  const decrementButton = screen.getByText("Decrement");

  // Test increment
  fireEvent.click(incrementButton);
  await screen.findByText("Count: 1"); // Wait for the count to update
  expect(countElement).toHaveTextContent("Count: 1");

  // Test decrement
  fireEvent.click(decrementButton);
  await screen.findByText("Count: 0"); // Wait for the count to update
  expect(countElement).toHaveTextContent("Count: 0");
});
