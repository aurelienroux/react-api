import React from "react";
import ListingSites from "../components//Pages/ListingSites";
import { render } from "@testing-library/react";

it("renders component without crashing without crashing", () => {
  render(<ListingSites />);
});
