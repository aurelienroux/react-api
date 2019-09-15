import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { create } from "react-test-renderer";
import Header from "../components/Layout/Header";

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const header = create(
      <Router>
        <Header />
      </Router>
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
