import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { CharacterDetails } from ".";
import { characterList } from "@lib/mocks/character";

const character = characterList[0];

test("render character image", () => {
  render(<CharacterDetails {...character} />);

  const imageElement = screen.getByRole("img");

  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute("src", character.image);
  expect(imageElement).toHaveAttribute("alt", character.name);
});

test("render character details", () => {
  render(<CharacterDetails {...character} />);

  const nameElement = screen.getByText(character.name);
  const genderElement = screen.getByText(character.gender);
  const speciesElement = screen.getByText(character.species);

  expect(nameElement).toBeInTheDocument();
  expect(genderElement).toBeInTheDocument();
  expect(speciesElement).toBeInTheDocument();
});
