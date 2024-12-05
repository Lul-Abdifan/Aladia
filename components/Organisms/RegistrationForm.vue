<template>
  <div
    class="flex h-screen px-24 py-24 md:px-48 md:py-32 lg:px-32 xl:px-48 bg-cover bg-no-repeat"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="w-full md:grid md:grid-cols-2 rounded-3xl bg-white">
      <!-- Left Side -->
      <form class="w-full md:col-span-1 bg-[#F9F9F9] md:py-12 py-6 px-14 md:px-10 lg:px-16 xl:px-20 rounded-l-3xl">
        <div class="pt-4 text-medium">Full Name</div>
        <TextInput placeholder="John Doe" />

        <div class="pt-8 text-medium">Email</div>
        <TextInput placeholder="you@example.com" />

        <div class="pt-8 text-medium">Password</div>
        <PasswordInput placeholder="**********" />

        <div class="pt-8 text-medium">Confirm Password</div>
        <PasswordInput placeholder="**********" />

        <Button
          class="mt-12"
          :bgColor="'bg-primary'"
          :textColor="'text-white'"
          :hoverBgColor="'bg-secondary'"
          :size="'11'"
          :rounded="'full'"
        >
          Sign Up
        </Button>

        <div class="pt-8 text-center">
          <span>Already have an account? </span>
          <nuxt-link to="/" class="text-primary text-sm">Login</nuxt-link>
        </div>

        <Image :src="logoImageSrc" :alt="logoImageAlt" customClass="relative mt-12 mx-auto w-24" />
      </form>

      <!-- Right Side (Using RightSide Molecule) -->
      <RightSide
        :title="'Welcome to Aladia!'"
        :description="'Sign up to get started with our Programming School portal!'"
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
import PasswordInput from "@/components/Molecules/PasswordInput.vue";
import Button from "@/components/Atoms/Button.vue";
import Image from "@/components/Atoms/Image.vue";
import RightSide from "@/components/Molecules/RightSide.vue";

export default {
  components: {
    TextInput,
    PasswordInput,
    Button,
    Image,
    RightSide,
  },
  props: {
    bgImage: {
      type: String,
      required: true,
    },
    logoImageSrc: {
      type: String,
      required: true,
      default: "/auth/aladia.png",
    },
    logoImageAlt: {
      type: String,
      required: true,
      default: "Aladia Logo",
    },
    rightSideImageSrc: {
      type: String,
      required: true,
      default: "/auth/aladia.png",
    },
    rightSideImageAlt: {
      type: String,
      required: true,
      default: "Signup Illustration",
    },
    rightSideImageWidth: {
      type: Number,
      required: true,
      default: 300,
    },
    rightSideImageHeight: {
      type: Number,
      required: true,
      default: 100,
    },
  },
};
</script>

<style scoped>

</style>
