import React from "react";
import { create } from "react-test-renderer";
import Client from "../components/Pages/Client";

test("Matches the snapshot", () => {
  const defaultProps = {
    match: { params: { id: 123 } }
  };
  const clients = create(<Client {...defaultProps} />);
  expect(clients.toJSON()).toMatchSnapshot();
});
