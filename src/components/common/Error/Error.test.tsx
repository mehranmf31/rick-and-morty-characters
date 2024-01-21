import { expect, test } from "vitest";
import { Error } from ".";
import { render, screen } from "@testing-library/react";

test("render error wrapper content", () => {
  render(<Error message="test" />);
  const errorWrapperElement = screen.getByText(/test/i);
  expect(errorWrapperElement).toContainHTML("test");
});
