import React from "react";
import { create } from "react-test-renderer";
import Site from "../components/Pages/Site";

test("Matches the snapshot", () => {
  const defaultProps = {
    match: { params: { id: 123 } }
  };
  const sites = create(<Site {...defaultProps} />);
  expect(sites.toJSON()).toMatchSnapshot();
});
