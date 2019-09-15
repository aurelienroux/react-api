import React from "react";
import Site from "../components/Pages/Site";
import { render } from "@testing-library/react";

it("renders component without crashing without crashing", () => {
  const defaultProps = {
    match: { params: { id: 123 } }
  };
  render(<Site {...defaultProps} />);
});
