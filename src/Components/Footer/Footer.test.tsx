import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./index";
import React from "react";

describe("global footer", () => {
  it("renders a footer", () => {
    render(<Footer />);
    expect(screen.getByText("the skin studio by nikki")).toBeTruthy();
  });
  it("has a button", () => {
    render(<Footer />);
    expect(screen.getByRole("button")).toBeTruthy();
  });
});
