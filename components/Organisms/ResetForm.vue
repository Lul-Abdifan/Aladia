<template>
  <div
    class="flex h-screen px-24 py-24 md:px-48 md:py-32 lg:px-32 xl:px-48 bg-cover bg-no-repeat"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="w-full md:grid md:grid-cols-2 rounded-3xl bg-white">
      <!-- Left Side (Reset Password Form) -->
      <form class="w-full md:col-span-1 bg-[#F9F9F9] md:py-12 py-6 px-14 md:px-10 lg:px-16 xl:px-20 rounded-l-3xl">
        <div class="pt-4">{{ newPasswordLabel }}</div>
        <PasswordInput :placeholder="newPasswordPlaceholder" />

        <div class="pt-8">{{ confirmPasswordLabel }}</div>
        <PasswordInput :placeholder="confirmPasswordPlaceholder" />

        <Button
          class="mt-12 w-full"
          :bgColor="buttonBgColor"
          :textColor="buttonTextColor"
          :hoverBgColor="buttonHoverBgColor"
          :size="buttonSize"
          :rounded="buttonRounded"
        >
          {{ buttonLabel }}
        </Button>

        <div class="w-full flex text-black rounded-l-3xl mt-7">
          <NuxtLink to="/" class="w-full text-center text-primary mx-auto text-sm">
            {{ returnToLoginLabel }}
          </NuxtLink>
        </div>

        <Image :src="logoSrc" :alt="logoAlt" customClass="relative mt-12 mx-auto w-24" />
      </form>

      <!-- Right Side (Using RightSide Molecule) -->
      <RightSide
        :title="rightSideTitle"
        :description="rightSideDescription"
        :imageSrc="rightSideImageSrc"
        :imageAlt="rightSideImageAlt"
        :imageWidth="rightSideImageWidth"
        :imageHeight="rightSideImageHeight"
      />
    </div>
  </div>
</template>

<script>
import PasswordInput from "@/components/Molecules/PasswordInput.vue";
import Button from "@/components/Atoms/Button.vue";
import Image from "@/components/Atoms/Image.vue";
import RightSide from "@/components/Molecules/RightSide.vue";

export default {
  components: {
    PasswordInput,
    Button,
    Image,
    RightSide,
  },
  props: {
    bgImage: {
      type: String,
      default: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1702039103/Rectangle_4883_qk9nw2.png",
    },
    newPasswordLabel: {
      type: String,
      default: "New Password",
    },
    newPasswordPlaceholder: {
      type: String,
      default: "Enter new password",
    },
    confirmPasswordLabel: {
      type: String,
      default: "Confirm Password",
    },
    confirmPasswordPlaceholder: {
      type: String,
      default: "Confirm your password",
    },
    buttonLabel: {
      type: String,
      default: "Reset Password",
    },
    buttonBgColor: {
      type: String,
      default: "bg-primary",
    },
    buttonTextColor: {
      type: String,
      default: "text-white",
    },
    buttonHoverBgColor: {
      type: String,
      default: "bg-secondary",
    },
    buttonSize: {
      type: String,
      default: "11",
    },
    buttonRounded: {
      type: String,
      default: "full",
    },
    returnToLoginLabel: {
      type: String,
      default: "Return to login",
    },
    logoSrc: {
      type: String,
      default: "/auth/aladia.png",
    },
    logoAlt: {
      type: String,
      default: "Aladia Logo",
    },
    rightSideTitle: {
      type: String,
      default: "Reset Your Password",
    },
    rightSideDescription: {
      type: String,
      default: "Please enter your new password and confirm it to reset your password.",
    },
    rightSideImageSrc: {
      type: String,
      default: "/auth/forgot-password-img.png",
    },
    rightSideImageAlt: {
      type: String,
      default: "Reset Password Illustration",
    },
    rightSideImageWidth: {
      type: Number,
      default: 300,
    },
    rightSideImageHeight: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style scoped>
/* Optional styling for the password field eye icon if needed */

</style>
