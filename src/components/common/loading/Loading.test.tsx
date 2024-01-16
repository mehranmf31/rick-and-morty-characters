import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Loading } from ".";

test("render loading component", () => {
  render(<Loading />);
  const loadingElement = screen.getByTitle("loading");
  expect(loadingElement).toBeInTheDocument();
});
