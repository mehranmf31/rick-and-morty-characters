import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Button } from ".";

test("render button component", () => {
  render(<Button>test</Button>);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toContainHTML("test");
});

test("render disabled button", () => {
  render(<Button disabled>test</Button>);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeDisabled();
});
