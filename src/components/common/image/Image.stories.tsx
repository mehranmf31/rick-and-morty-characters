import { Meta, StoryObj } from "@storybook/react";
import { Image } from ".";

const meta: Meta<typeof Image> = {
  title: "common/image",
  component: Image,
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/200/300",
    alt: "The Lorem Ipsum for photos.",
  },
};
