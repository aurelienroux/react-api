import React from "react";
import Header from "../components/Layout/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

it("renders component without crashing", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
});
