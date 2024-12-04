<template>
    <div class="font-inter flex h-screen xl:px-48 lg:px-32 md:px-24 px-24 md:py-32 py-24">
      <div class="w-full h-full md:grid md:grid-cols-2 rounded-3xl">
        <!-- Left Side -->
        <div class="w-full h-full md:col-span-1 bg-secondary md:py-12 py-6 xl:px-20 lg:px-16 md:px-10 px-14 text-gray-700 rounded-l-3xl">
          <div class="pt-4 text-medium">Email</div>
          <div class="relative mt-4 rounded-md">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <HiOutlineMail class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              id="email"
              type="email"
              class="block w-full h-11 rounded-full py-1.5 ring-1 ring-green-400 pl-10 text-gray-900 bg-[#F2F2F2] placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="you@example.com"
            />
          </div>
  
          <!-- Updated Button usage -->
          <NuxtLink to="/auth/code-verification">
            


            <Button
          class="mt-large"
          :bgColor="'bg-primary'"
          :textColor="'text-white'"
          :hoverBgColor="'bg-primary-dark'"
          :size="'11'"
          :rounded="'full'"
        >
          Type Your Email
        </Button>
          </NuxtLink>
  
          <!-- Return to Login Link -->
          <div class="w-full flex text-black rounded-l-3xl mt-7">
            <NuxtLink to="/" class="w-full text-center text-primary mx-auto text-small">Return to login</NuxtLink>
          </div>
  
          <!-- Logo -->
          <Image src="/auth/aladia.png" alt="Aladia Logo" customClass="relative mt-12 mx-auto w-24" />
        </div>
  
        <!-- Right Side (Using RightSide Molecule) -->
        <RightSide
          :title="'Welcome to Aladia!'"
          :description="'You can provide your email and reset your Programming School portal.'"
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
  