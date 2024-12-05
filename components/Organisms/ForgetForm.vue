<template>
  <div class="font-inter flex h-screen xl:px-48 lg:px-32 md:px-24 px-24 md:py-32 py-24">
    <div class="w-full h-full md:grid md:grid-cols-2 rounded-3xl">
      <!-- Left Side -->
      <div class="w-full h-full md:col-span-1 bg-secondary md:py-12 py-6 xl:px-20 lg:px-16 md:px-10 px-14 text-gray-700 rounded-l-3xl">
        <div class="pt-4 text-medium">Email</div>
        <TextInput :placeholder="emailPlaceholder" />

        <!-- Updated Button usage -->
        <NuxtLink :to="linkTo">
          <Button
            class="mt-large"
            :bgColor="buttonBgColor"
            :textColor="buttonTextColor"
            :hoverBgColor="buttonHoverBgColor"
            :size="buttonSize"
            :rounded="buttonRounded"
          >
            {{ buttonText }}
          </Button>
        </NuxtLink>

        <!-- Return to Login Link -->
        <div class="w-full flex text-black rounded-l-3xl mt-7">
          <NuxtLink :to="loginLink" class="w-full text-center text-primary mx-auto text-small">{{ returnText }}</NuxtLink>
        </div>

        <!-- Logo -->
        <Image :src="logoSrc" :alt="logoAlt" customClass="relative mt-12 mx-auto w-24" />
      </div>

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
      default: "/auth/signin-img.png",
    },
    rightSideImageAlt: {
      type: String,
      required: true,
      default: "Signin Illustration",
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
