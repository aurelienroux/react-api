import React from "react";
import Client from "../components/Pages/Client";
import { render } from "@testing-library/react";

it("renders component without crashing without crashing", () => {
  const defaultProps = {
    match: { params: { id: 123 } }
  };
  render(<Client {...defaultProps} />);
});
