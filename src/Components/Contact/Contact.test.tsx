import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "./index";
import React from "react";

describe("Contact Page", () => {
  it("renders contact page", () => {
    render(<Contact />);
    expect(screen.getByText("This is the Contact Section!")).toBeTruthy();
  });
});
