import type { Meta, StoryObj } from "@storybook/vue3";
import PasswordInput from "~/components/Molecules/PasswordInput.vue";

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  title: "Molecules/PasswordInput",
  argTypes: {
    placeholder: {
      control: "text",
      description: "Text placeholder for the password input field",
    },
    showPassword: {
      control: "boolean",
      description: "Toggles password visibility",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Primary: Story = {
  render: (args: any) => ({
    components: { PasswordInput },
    setup() {
      return { args };
    },
    template: `<PasswordInput v-bind="args" v-model:showPassword="args.showPassword" />`,
  }),
  args: {
    placeholder: "Enter your password",
    showPassword: false,
  },
};

export const VisiblePassword: Story = {
  render: (args: any) => ({
    components: { PasswordInput },
    setup() {
      return { args };
    },
    template: `<PasswordInput v-bind="args" v-model:showPassword="args.showPassword" />`,
  }),
  args: {
    placeholder: "Enter your password",
    showPassword: true,
  },
};
