import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "../components/Pages/Dashboard";

it("renders component", () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
});
