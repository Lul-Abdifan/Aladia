import type { Meta, StoryObj } from "@storybook/vue3";
import CodeVerification from "~/components/Organisms/CodeVerification.vue";
import RightSide from "~/components/Molecules/RightSide.vue";

const meta: Meta<typeof CodeVerification> = {
  component: CodeVerification,
  title: "Organisms/CodeVerification",
  argTypes: {
    bgImage: {
      control: "text",
      description: "Background image URL",
    },
    formTitle: {
      control: "text",
      description: "Title of the form",
    },
    formDescription: {
      control: "text",
      description: "Description of the form",
    },
    buttonLabel: {
      control: "text",
      description: "Label of the button",
    },
    buttonBgColor: {
      control: "text",
      description: "Background color of the button",
    },
    buttonTextColor: {
      control: "text",
      description: "Text color of the button",
    },
    buttonHoverBgColor: {
      control: "text",
      description: "Background color on hover of the button",
    },
    buttonSize: {
      control: "text",
      description: "Size of the button",
    },
    buttonRounded: {
      control: "text",
      description: "Border radius of the button",
    },
    logoSrc: {
      control: "text",
      description: "Logo image source URL",
    },
    logoAlt: {
      control: "text",
      description: "Logo image alt text",
    },
    rightSideTitle: {
      control: "text",
      description: "Title for the right side section",
    },
    rightSideDescription: {
      control: "text",
      description: "Description for the right side section",
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
type Story = StoryObj<typeof CodeVerification>;

export const Default: Story = {
  render: (args: any) => ({
    components: { CodeVerification, RightSide },
    setup() {
      return { args };
    },
    template: `
      <CodeVerification
        :bgImage="args.bgImage"
        :formTitle="args.formTitle"
        :formDescription="args.formDescription"
        :buttonLabel="args.buttonLabel"
        :buttonBgColor="args.buttonBgColor"
        :buttonTextColor="args.buttonTextColor"
        :buttonHoverBgColor="args.buttonHoverBgColor"
        :buttonSize="args.buttonSize"
        :buttonRounded="args.buttonRounded"
        :logoSrc="args.logoSrc"
        :logoAlt="args.logoAlt"
        :rightSideTitle="args.rightSideTitle"
        :rightSideDescription="args.rightSideDescription"
        :rightSideImageSrc="args.rightSideImageSrc"
        :rightSideImageAlt="args.rightSideImageAlt"
        :rightSideImageWidth="args.rightSideImageWidth"
        :rightSideImageHeight="args.rightSideImageHeight"
      />
    `,
  }),
  args: {
    bgImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1702039103/Rectangle_4883_qk9nw2.png",
    formTitle: "Verify Your Email",
    formDescription: "Enter the 10-digit code sent to your email",
    buttonLabel: "Fill The Email Code",
    buttonBgColor: "bg-primary",
    buttonTextColor: "text-white",
    buttonHoverBgColor: "bg-secondary",
    buttonSize: "11",
    buttonRounded: "full",
    logoSrc: "public/auth/aladia.png",
    logoAlt: "Aladia Logo",
    rightSideTitle: "Email Verification",
    rightSideDescription: "Please verify your email to continue using the Programming School portal.",
    rightSideImageSrc: "public/auth/signin-img.png",
    rightSideImageAlt: "Verification Illustration",
    rightSideImageWidth: 300,
    rightSideImageHeight: 100,
  },
};

export const CustomCodeVerification: Story = {
  render: (args: any) => ({
    components: { CodeVerification, RightSide },
    setup() {
      return { args };
    },
    template: `
      <CodeVerification
        :bgImage="args.bgImage"
        :formTitle="args.formTitle"
        :formDescription="args.formDescription"
        :buttonLabel="args.buttonLabel"
        :buttonBgColor="args.buttonBgColor"
        :buttonTextColor="args.buttonTextColor"
        :buttonHoverBgColor="args.buttonHoverBgColor"
        :buttonSize="args.buttonSize"
        :buttonRounded="args.buttonRounded"
        :logoSrc="args.logoSrc"
        :logoAlt="args.logoAlt"
        :rightSideTitle="args.rightSideTitle"
        :rightSideDescription="args.rightSideDescription"
        :rightSideImageSrc="args.rightSideImageSrc"
        :rightSideImageAlt="args.rightSideImageAlt"
        :rightSideImageWidth="args.rightSideImageWidth"
        :rightSideImageHeight="args.rightSideImageHeight"
      />
    `,
  }),
  args: {
    bgImage: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1702039103/Rectangle_4883_qk9nw2.png",
    formTitle: "Verify Your Email",
    formDescription: "Enter the 10-digit code sent to your email",
    buttonLabel: "Submit Code",
    buttonBgColor: "bg-primary",
    buttonTextColor: "text-white",
    buttonHoverBgColor: "bg-secondary",
    buttonSize: "12",
    buttonRounded: "md",
    logoSrc: "public/auth/aladia.png",
    logoAlt: "Aladia Logo",
    rightSideTitle: "Email Verification",
    rightSideDescription: "Verify your email to proceed with account setup.",
    rightSideImageSrc: "public/auth/aladia.png",
    rightSideImageAlt: "Custom Email Verification Illustration",
    rightSideImageWidth: 400,
    rightSideImageHeight: 150,
  },
};
