import type { Meta, StoryObj } from "@storybook/vue3";
import RightSide from "~/components/Molecules/RightSide.vue";

const meta: Meta<typeof RightSide> = {
  component: RightSide,
  title: "Molecules/RightSide",
  argTypes: {
    title: {
      control: "text",
      description: "The main title displayed at the top",
    },
    description: {
      control: "text",
      description: "The description displayed below the title",
    },
    imageSrc: {
      control: "text",
      description: "The source URL for the image",
    },
    imageAlt: {
      control: "text",
      description: "Alt text for the image",
    },
    imageWidth: {
      control: "number",
      description: "Width of the image in pixels",
    },
    imageHeight: {
      control: "number",
      description: "Height of the image in pixels",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RightSide>;

export const Default: Story = {
  render: (args: any) => ({
    components: { RightSide },
    setup() {
      return { args };
    },
    template: `<RightSide v-bind="args" />`,
  }),
  args: {
    title: "Welcome to RightSide",
    description: "This is a descriptive text for the RightSide component.",
    imageSrc: "public/auth/signin-img.png",
    imageAlt: "Placeholder Image",
    imageWidth: 300,
    imageHeight: 100,
  },
};

export const CustomImage: Story = {
  render: (args: any) => ({
    components: { RightSide },
    setup() {
      return { args };
    },
    template: `<RightSide v-bind="args" />`,
  }),
  args: {
    title: "Custom RightSide Title",
    description: "A custom description showcasing a larger image.",
    imageSrc: "public/auth/aladia.png",
    imageAlt: "Custom Placeholder Image",
    imageWidth: 500,
    imageHeight: 200,
  },
};
