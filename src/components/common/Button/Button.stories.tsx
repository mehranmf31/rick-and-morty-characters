import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "common/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click!",
  },
};

export const Loading: Story = {
  args: {
    children: "Click!",
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Click!",
    isLoading: true,
    disabled: true,
  },
};
