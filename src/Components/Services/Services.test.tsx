import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Services from "./index";
import React from "react";

describe("Services Page", () => {
  it("renders details page", () => {
    render(<Services />);
    expect(screen.getByText("Services")).toBeTruthy();
  });
  it("includes a h2 element", () => {
    render(<Services />);
    expect(screen.getAllByRole("heading")).toBeTruthy();
  });
  it("renders as an unordered list with list items", () => {
    render(<Services />);
    expect(screen.getByRole("list")).toBeTruthy();
    expect(screen.getAllByRole("listitem")).toHaveLength(9);
  });
  it("renders a set of image elements for each service", () => {
    render(<Services />);
    expect(screen.getAllByRole("img")).toHaveLength(9);
  });
});
