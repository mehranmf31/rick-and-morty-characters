import type { Meta, StoryObj } from "@storybook/react";

import { Loading } from "./Loading";

const meta: Meta<typeof Loading> = {
  title: "common/loading",
  component: Loading,
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {},
};
