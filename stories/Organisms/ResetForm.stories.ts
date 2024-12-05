import type { Meta, StoryObj } from "@storybook/vue3";
import ResetForm from "~/components/Organisms/ResetForm.vue";
import RightSide from "~/components/Molecules/RightSide.vue";

const meta: Meta<typeof ResetForm> = {
  component: ResetForm,
  title: "Organisms/ResetForm",
  argTypes: {
    bgImage: {
      control: "text",
      description: "Background image URL",
    },
    newPasswordLabel: {
      control: "text",
      description: "Label for the new password field",
    },
    newPasswordPlaceholder: {
      control: "text",
      description: "Placeholder for the new password input",
    },
    confirmPasswordLabel: {
      control: "text",
      description: "Label for the confirm password field",
    },
    confirmPasswordPlaceholder: {
      control: "text",
      description: "Placeholder for the confirm password input",
    },
    buttonLabel: {
      control: "text",
      description: "Label for the reset password button",
    },
    buttonBgColor: {
      control: "text",
      description: "Background color for the button",
    },
    buttonTextColor: {
      control: "text",
      description: "Text color for the button",
    },
    buttonHoverBgColor: {
      control: "text",
      description: "Background color for the button when hovered",
    },
    buttonSize: {
      control: "text",
      description: "Size of the button",
    },
    buttonRounded: {
      control: "text",
      description: "Button border radius (e.g., 'full', 'sm', 'lg')",
    },
    returnToLoginLabel: {
      control: "text",
      description: "Label for the return to login link",
    },
    logoSrc: {
      control: "text",
      description: "Logo image source URL",
    },
    logoAlt: {
      control: "text",
      description: "Logo alt text",
    },
    rightSideTitle: {
      control: "text",
      description: "Title for the right side content",
    },
    rightSideDescription: {
      control: "text",
      description: "Description for the right side content",
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
type Story = StoryObj<typeof ResetForm>;

export const Default: Story = {
  render: (args: any) => ({
    components: { ResetForm, RightSide },
    setup() {
      return { args };
    },
    template: `
      <ResetForm 
        :bgImage="args.bgImage"
        :newPasswordLabel="args.newPasswordLabel"
        :newPasswordPlaceholder="args.newPasswordPlaceholder"
        :confirmPasswordLabel="args.confirmPasswordLabel"
        :confirmPasswordPlaceholder="args.confirmPasswordPlaceholder"
        :buttonLabel="args.buttonLabel"
        :buttonBgColor="args.buttonBgColor"
        :buttonTextColor="args.buttonTextColor"
        :buttonHoverBgColor="args.buttonHoverBgColor"
        :buttonSize="args.buttonSize"
        :buttonRounded="args.buttonRounded"
        :returnToLoginLabel="args.returnToLoginLabel"
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
    newPasswordLabel: "New Password",
    newPasswordPlaceholder: "Enter new password",
    confirmPasswordLabel: "Confirm Password",
    confirmPasswordPlaceholder: "Confirm your password",
    buttonLabel: "Reset Password",
    buttonBgColor: "bg-primary",
    buttonTextColor: "text-white",
    buttonHoverBgColor: "bg-secondary",
    buttonSize: "11",
    buttonRounded: "full",
    returnToLoginLabel: "Return to login",
    logoSrc: "public/auth/aladia.png",
    logoAlt: "Aladia Logo",
    rightSideTitle: "Reset Your Password",
    rightSideDescription: "Please enter your new password and confirm it to reset your password.",
    rightSideImageSrc: "public/auth/signin-img.png",
    rightSideImageAlt: "Reset Password Illustration",
    rightSideImageWidth: 300,
    rightSideImageHeight: 100,
  },
};

export const CustomReset: Story = {
  render: (args: any) => ({
    components: { ResetForm, RightSide },
    setup() {
      return { args };
    },
    template: `
      <ResetForm 
        :bgImage="args.bgImage"
        :newPasswordLabel="args.newPasswordLabel"
        :newPasswordPlaceholder="args.newPasswordPlaceholder"
        :confirmPasswordLabel="args.confirmPasswordLabel"
        :confirmPasswordPlaceholder="args.confirmPasswordPlaceholder"
        :buttonLabel="args.buttonLabel"
        :buttonBgColor="args.buttonBgColor"
        :buttonTextColor="args.buttonTextColor"
        :buttonHoverBgColor="args.buttonHoverBgColor"
        :buttonSize="args.buttonSize"
        :buttonRounded="args.buttonRounded"
        :returnToLoginLabel="args.returnToLoginLabel"
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
    newPasswordLabel: "New Password",
    newPasswordPlaceholder: "Enter new password",
    confirmPasswordLabel: "Confirm Password",
    confirmPasswordPlaceholder: "Confirm your password",
    buttonLabel: "Reset Password",
    buttonBgColor: "bg-primary",
    buttonTextColor: "text-white",
    buttonHoverBgColor: "bg-secondary",
    buttonSize: "11",
    buttonRounded: "full",
    returnToLoginLabel: "Return to login",
    logoSrc: "public/auth/aladia.png",
    logoAlt: "Aladia Logo",
    rightSideTitle: "Custom Reset Password",
    rightSideDescription: "Please enter your new password and confirm it to reset your password. Custom description.",
    rightSideImageSrc: "public/auth/signin-img.png",
    rightSideImageAlt: "Custom Reset Password Illustration",
    rightSideImageWidth: 400,
    rightSideImageHeight: 150,
  },
};
