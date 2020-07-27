import React from "react";
import MidStar from "../src/components/RatingSummary/midStar";
import renderer from "react-test-renderer";

// snapshot test if anything in component is changed this snapshot will need to be updated or this test changed

describe("This snapshot test should pass for 3 stars", () => {
  it("Should render as expected!", () => {
    const tree = renderer.create(<MidStar />).toJSON();

    console.log(tree);

    expect(tree).toMatchSnapshot();
  });
});