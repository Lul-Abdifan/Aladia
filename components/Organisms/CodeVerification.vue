<template>
  <div
    class="flex h-screen px-24 py-24 md:px-48 md:py-32 lg:px-32 xl:px-48 bg-cover bg-no-repeat"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="w-full md:grid md:grid-cols-2 rounded-3xl bg-white">
      <!-- Left Side -->
      <form
        @submit.prevent="handleSubmit"
        class="w-full md:col-span-1 bg-[#F9F9F9] md:py-12 py-6 px-14 md:px-10 lg:px-16 xl:px-20 rounded-l-3xl"
      >
        <div class="text-2xl font-semibold pb-4">{{ formTitle }}</div>
        <div class="pb-2 text-gray-600">{{ formDescription }}</div>

        <TextInput
          v-model="otp"
          placeholder="Enter the code"
          maxlength="10"
          class="w-full mt-8"
          :error-message="otpError"
        />

        <NuxtLink to="/auth/reset-password">
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
        </NuxtLink>

        <div class="pt-8 text-center">
          <span>Didn't receive the code? </span>
          <button
            type="button"
            class="text-primary text-sm underline"
            @click="resendOtp"
          >
            Resend Code
          </button>
        </div>

        <Image
          :src="logoSrc"
          :alt="logoAlt"
          customClass="relative mt-12 mx-auto w-24"
        />
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
import TextInput from "@/components/Atoms/TextInput.vue";
import Button from "@/components/Atoms/Button.vue";
import Image from "@/components/Atoms/Image.vue";
import RightSide from "@/components/Molecules/RightSide.vue";

export default {
  components: {
    TextInput,
    Button,
    Image,
    RightSide,
  },
  props: {
    bgImage: {
      type: String,
      default: "https://res.cloudinary.com/dr8ozjurp/image/upload/v1702039103/Rectangle_4883_qk9nw2.png",
    },
    formTitle: {
      type: String,
      default: "Verify Your Email",
    },
    formDescription: {
      type: String,
      default: "Enter the 10-digit code sent to your email",
    },
    buttonLabel: {
      type: String,
      default: "Fill The Email Code",
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
      default: "Email Verification",
    },
    rightSideDescription: {
      type: String,
      default: "Please verify your email to continue using the Programming School portal.",
    },
    rightSideImageSrc: {
      type: String,
      default: "/auth/forgot-password-img.png",
    },
    rightSideImageAlt: {
      type: String,
      default: "Verification Illustration",
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
  data() {
    return {
      otp: "",
      otpError: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.validateOtp()) {
        console.log("Code submitted: ", this.otp);
      }
    },
    validateOtp() {
      if (this.otp.length !== 6 || isNaN(this.otp)) {
        this.otpError = "Please enter a valid 6-digit code.";
        return false;
      }
      this.otpError = "";
      return true;
    },
    resendOtp() {
      console.log("Resending code...");
    },
  },
};
</script>

<style scoped>
</style>
