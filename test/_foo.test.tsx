import React from "react";
import { render } from "@testing-library/react";

const Foo = (): JSX.Element => <div>bar</div>;

test("qwerty", () => {
  render(<Foo />);
  expect(undefined).toBeUndefined();
});

describe("bar", () => {
  test("fizz", () => {
    expect(true).toBeTruthy();
  });
  test("buzz", () => {
    expect(null).toBeNull();
  });
});
