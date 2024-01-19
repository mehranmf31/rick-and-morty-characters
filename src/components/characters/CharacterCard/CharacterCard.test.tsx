import { expect, test } from "vitest";
import { CharacterCard } from ".";
import { render, screen } from "@testing-library/react";

const props = {
  id: 1,
  image: "https://picsum.photos/300/300",
  name: "Rick Sanches",
  location: "mock location",
  status: "alive",
  episodesCount: 2,
};

test("render character card component image", () => {
  render(<CharacterCard {...props} />);

  const imageElement = screen.getByRole("img");

  expect(imageElement).toHaveAttribute("alt", props.name);
  expect(imageElement).toHaveAttribute("src", props.image);
});

test("render character card component image", () => {
  render(<CharacterCard {...props} />);

  const titleElement = screen.getByRole("heading");

  expect(titleElement).toHaveTextContent(props.name);
});
