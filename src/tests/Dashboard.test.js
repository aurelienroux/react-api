import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { create } from "react-test-renderer";
import Dashboard from "../components/Pages/Dashboard";

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const dashboard = create(
      <Router>
        <Dashboard />
      </Router>
    );
    expect(dashboard.toJSON()).toMatchSnapshot();
  });
});
