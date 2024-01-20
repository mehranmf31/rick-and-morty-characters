import { Meta, StoryObj } from "@storybook/react";
import { CharacterCard } from ".";
import { withRouter } from "storybook-addon-react-router-v6";

const meta: Meta<typeof CharacterCard> = {
  title: "characters/CharacterCard",
  component: CharacterCard,
  decorators: [
    withRouter,
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
    id: 1,
    image: "https://picsum.photos/300/300",
    name: "Rick Sanches",
    location: "last location",
    status: "alive",
    episodesCount: 2,
  },
};
