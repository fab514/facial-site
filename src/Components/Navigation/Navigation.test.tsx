import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from ".";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("website navigation", () => {
  it("contains navigation links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    expect(screen.getAllByRole("link")).toHaveLength(5);
  });
  //   it("contains visually accessible colors", () => {
  //     render(
  //       <BrowserRouter>
  //         <Navigation />
  //       </BrowserRouter>
  //     );
  //     expect(screen.getByTestId("site navigation")).toHaveStyleRule(
  //       "background-color: #c0a9bd"
  //     );
  //   });
});
