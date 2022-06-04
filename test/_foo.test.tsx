import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const Foo = (): JSX.Element => {
  const [count, setCount] = React.useState(0);
  const incrementCount = () => setCount(current => current + 1);

  return (
    <div id="foo" onClick={incrementCount}>
      Count: {count}
    </div>
  );
};

test("qwerty", async () => {
  render(<Foo />);
  const foo = screen.getByText(/count/i);
  expect(foo).toHaveTextContent(/0/);
  await userEvent.click(foo);
  expect(foo).toHaveTextContent(/1/);
});

describe("bar", () => {
  test("fizz", () => {
    expect(true).toBeTruthy();
  });
  test("buzz", () => {
    expect(null).toBeNull();
  });
});
