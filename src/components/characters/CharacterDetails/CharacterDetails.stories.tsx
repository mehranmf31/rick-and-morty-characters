import { Meta, StoryObj } from "@storybook/react";
import { CharacterDetails } from ".";
import { characterList } from "@lib/mocks/character";

const character = characterList[0];

const meta: Meta<typeof CharacterDetails> = {
  title: "characters/CharacterDetails",
  component: CharacterDetails,
  decorators: [
    (Story) => (
      <div className="w-full overflow-hidden">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CharacterDetails>;

export const Default: Story = {
  args: { ...character },
};
