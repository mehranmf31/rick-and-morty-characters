import { Meta, StoryObj } from "@storybook/react";
import { Error } from "./Error";

const meta: Meta<typeof Error> = {
  title: "common/Error",
  component: Error,
  decorators: [
    (Story) => (
      <div className="w-full overflow-hidden">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Error>;

export const Default: Story = {
  args: {
    message: "There is an unexpected error!",
  },
};
