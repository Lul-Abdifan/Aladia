import type { Meta, StoryObj } from "@storybook/vue3";
import ForgetForm from "~/components/Organisms/ForgetForm.vue";
import RightSide from "~/components/Molecules/RightSide.vue";

const meta: Meta<typeof ForgetForm> = {
  component: ForgetForm,
  title: "Organisms/ForgetForm",
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
type Story = StoryObj<typeof ForgetForm>;

export const Default: Story = {
  render: (args: any) => ({
    components: { ForgetForm, RightSide },
    setup() {
      return { args };
    },
    template: `
      <ForgetForm 
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
    components: { ForgetForm, RightSide },
    setup() {
      return { args };
    },
    template: `
      <ForgetForm 
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
