import { Meta, StoryObj } from "@storybook/react";
import { CharacterCard } from ".";

const meta: Meta<typeof CharacterCard> = {
  title: "characters/CharacterCard",
  component: CharacterCard,
  decorators: [
    (Story) => (
      <div className="w-64 overflow-hidden">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CharacterCard>;

export const Default: Story = {
  args: {
    image: "https://picsum.photos/300/300",
    name: "Rick Sanches",
    location: "last location",
    status: "alive",
    episodesCount: 2,
  },
};
