import { render, screen } from "@testing-library/react";
import { Image } from ".";
import { expect, test } from "vitest";

test("render image component", () => {
  render(<Image src="test image src" alt="test image alt" />);

  const imageElement = screen.getByRole("img");

  expect(imageElement).toHaveAttribute("src", "test image src");
  expect(imageElement).toHaveAttribute("alt", "test image alt");
});
