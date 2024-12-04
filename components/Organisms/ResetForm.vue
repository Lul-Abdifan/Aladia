<template>
    <div
      class="flex h-screen px-24 py-24 md:px-48 md:py-32 lg:px-32 xl:px-48 bg-cover bg-no-repeat"
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <div class="w-full md:grid md:grid-cols-2 rounded-3xl bg-white">
        <!-- Left Side (Reset Password Form) -->
        <form class="w-full md:col-span-1 bg-[#F9F9F9] md:py-12 py-6 px-14 md:px-10 lg:px-16 xl:px-20 rounded-l-3xl">
          <div class="pt-4">New Password</div>
          <PasswordInput placeholder="Enter new password" />
  
          <div class="pt-8">Confirm Password</div>
          <PasswordInput placeholder="Confirm your password" />
  
          <Button
          class="mt-12 w-full"
          :bgColor="'bg-primary'"
          :textColor="'text-white'"
          :hoverBgColor="'bg-secondary'"
          :size="'11'"
          :rounded="'full'"
        >
          Reset Password
        </Button>
          <div class="w-full flex text-black rounded-l-3xl mt-7">
            <NuxtLink to="/" class="w-full text-center text-primary mx-auto text-sm">
              Return to login
            </NuxtLink>
          </div>
  
          <Image src="/auth/aladia.png" alt="Aladia Logo" customClass="relative mt-12 mx-auto w-24" />
        </form>
  
        <!-- Right Side (Using RightSide Molecule) -->
        <RightSide
          :title="'Reset Your Password'"
          :description="'Please enter your new password and confirm it to reset your password.'"
          :imageSrc="'/auth/forgot-password-img.png'"
          :imageAlt="'Reset Password Illustration'"
          :imageWidth="300"
          :imageHeight="100"
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
    data() {
      return {
        bgImage:
          "https://res.cloudinary.com/dr8ozjurp/image/upload/v1702039103/Rectangle_4883_qk9nw2.png",
      };
    },
  };
  </script>
  
  <style scoped>
  /* Optional styling for the password field eye icon if needed */
  .eye-open {
    transform: rotate(0deg);
  }
  .eye-closed {
    transform: rotate(180deg);
  }
  </style>
  