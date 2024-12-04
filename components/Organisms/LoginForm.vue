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

        <!-- Button with Dynamic Props -->
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

        <Image src="/auth/aladia.png" alt="Aladia Logo" customClass="relative mt-12 mx-auto w-24" />
      </form>

      <!-- Right Side (Using RightSide Molecule) -->
      <RightSide
        :title="'Welcome to Aladia!'"
        :description="'Sign into our Programming School portal. so we can get started!'"
        :imageSrc="'/auth/signin-img.png'"
        :imageAlt="'Signin Illustration'"
        :imageWidth="300"
        :imageHeight="100"
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
  data() {
    return {
      bgImage:
        "https://res.cloudinary.com/dr8ozjurp/image/upload/v1702039103/Rectangle_4883_qk9nw2.png",
    };
  },
};
</script>

<style scoped>
.eye-open {
  transform: rotate(0deg);
}
.eye-closed {
  transform: rotate(180deg);
}
</style>
