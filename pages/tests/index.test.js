import { render, screen, waitFor } from "@testing-library/react";
import Home from "../index";
import React from "react";
import "whatwg-fetch";

test("displays loading text", () => {
  render(<Home />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

test("displays fetched items", async () => {
  window.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: "1", name: "Item 1" },
          { id: "2", name: "Item 2" },
        ]),
    })
  );

  render(<Home />);

  await waitFor(() => {
    expect(screen.getAllByRole("listitem").length).toBe(2);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });
});

test("displays error on failure", async () => {
  window.fetch = jest.fn().mockRejectedValueOnce(new Error("Failed to fetch"));

  render(<Home />);

  await waitFor(() => {
    expect(screen.getByRole("alert")).toHaveTextContent("Failed to fetch");
  });
});
