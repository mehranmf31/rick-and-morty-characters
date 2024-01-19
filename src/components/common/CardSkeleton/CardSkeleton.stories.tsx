import { Meta, StoryObj } from "@storybook/react";
import { CardSkeleton } from "./CardSkeleton";

const meta: Meta<typeof CardSkeleton> = {
  title: "common/CardSkeleton",
  component: CardSkeleton,
  decorators: [
    (Story) => (
      <div className="w-64 overflow-hidden">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CardSkeleton>;

export const Default: Story = {
  args: {},
};
