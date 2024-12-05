<template>
  <div
    class="flex h-screen px-24 py-24 md:px-48 md:py-32 lg:px-32 xl:px-48 bg-cover bg-no-repeat"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="w-full md:grid md:grid-cols-2 rounded-3xl bg-white">
      <!-- Left Side -->
      <form class="w-full md:col-span-1 bg-secondary md:py-12 py-6 px-medium md:px-10 lg:px-16 xl:px-20 rounded-l-3xl font-inter">
        <div class="pt-4 text-medium">Email</div>
        <TextInput placeholder="you@example.com" />

        <div class="pt-8 flex justify-between text-medium">
          <span>Password</span>
          <nuxt-link to="/auth/forget-password" class="text-primary text-small">
            Forgot password?
          </nuxt-link>
        </div>

        <PasswordInput placeholder="**********" />

        <Button
          class="mt-large"
          :bgColor="'bg-primary'"
          :textColor="'text-white'"
          :hoverBgColor="'bg-secondary'"
          :size="'11'"
          :rounded="'full'"
        >
          Login
        </Button>

        <div class="pt-8 flex justify-between">
          <nuxt-link to="/auth/register" class="text-primary text-small">
            Sign Up?
          </nuxt-link>
        </div>

        <Image
          :src="logoImageSrc"
          :alt="logoImageAlt"
          customClass="relative mt-12 mx-auto w-24"
        />
      </form>

      <!-- Right Side -->
      <RightSide
        :title="'Welcome to Aladia!'"
        :description="'Sign into our Programming School portal. so we can get started!'"
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
