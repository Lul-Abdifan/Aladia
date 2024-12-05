import type { Meta, StoryObj } from "@storybook/vue3";
import LoginForm from "~/components/Organisms/LoginForm.vue";
import RightSide from "~/components/Molecules/RightSide.vue";

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: "Organisms/LoginForm",
  argTypes: {
    bgImage: {
      control: "text",
      description: "Background image URL",
    },
    logoImageSrc: {
      control: "text",
      description: "Logo image source URL",
    },
    logoImageAlt: {
      control: "text",
      description: "Logo image alt text",
    },
    rightSideImageSrc: {
      control: "text",
      description: "Right side image source URL",
    },
    rightSideImageAlt: {
      control: "text",
      description: "Right side image alt text",
    },
    rightSideImageWidth: {
      control: "number",
      description: "Width of the right side image",
    },
    rightSideImageHeight: {
      control: "number",
      description: "Height of the right side image",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  render: (args: any) => ({
    components: { LoginForm, RightSide },
    setup() {
      return { args };
    },
    template: `
      <LoginForm 
        :bgImage="args.bgImage"
        :logoImageSrc="args.logoImageSrc"
        :logoImageAlt="args.logoImageAlt"
        :rightSideImageSrc="args.rightSideImageSrc"
        :rightSideImageAlt="args.rightSideImageAlt"
        :rightSideImageWidth="args.rightSideImageWidth"
        :rightSideImageHeight="args.rightSideImageHeight"
      />
    `,
  }),
  args: {
    bgImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1702039103/Rectangle_4883_qk9nw2.png",
    logoImageSrc: "public/auth/aladia.png",
    logoImageAlt: "Aladia Logo",
    rightSideImageSrc: "public/auth/signin-img.png",
    rightSideImageAlt: "Signin Illustration",
    rightSideImageWidth: 300,
    rightSideImageHeight: 100,
  },
};

export const LoginCustom: Story = {
  render: (args: any) => ({
    components: { LoginForm, RightSide },
    setup() {
      return { args };
    },
    template: `
      <LoginForm 
        :bgImage="args.bgImage"
        :logoImageSrc="args.logoImageSrc"
        :logoImageAlt="args.logoImageAlt"
        :rightSideImageSrc="args.rightSideImageSrc"
        :rightSideImageAlt="args.rightSideImageAlt"
        :rightSideImageWidth="args.rightSideImageWidth"
        :rightSideImageHeight="args.rightSideImageHeight"
      />
    `,
  }),
  args: {
    bgImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1702039103/Rectangle_4883_qk9nw2.png",
    logoImageSrc: "public/auth/aladia.png",
    logoImageAlt: "Aladia Logo",
    rightSideImageSrc: "public/auth/aladia.png",
    rightSideImageAlt: "Custom Signin Illustration",
    rightSideImageWidth: 500,
    rightSideImageHeight: 200,
  },
};
