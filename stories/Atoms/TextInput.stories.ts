import type { Meta, StoryObj } from "@storybook/vue3";

import TextInput from "~/components/Atoms/TextInput.vue";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: "Atoms/TextInput",
  argTypes: {
    placeholder: {
      control: "text",
      description: "Text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  render: (args) => ({
    components: { TextInput },
    setup() {
      return { args };
    },
    template: '<TextField v-bind="args" />',
  }),
  args: {
    placeholder: "Enter your email",
  },
};
