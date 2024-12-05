<template>
    <div class="relative mt-4 rounded-md">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3">
        <slot name="icon" />
      </div>
      <input
        :type="type"
        :placeholder="placeholder"
        class="block w-full h-11 rounded-full py-1.5 pl-10 text-gray-900 bg-[#F2F2F2] placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-gray-300 focus:ring-primary focus:outline-none"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      type: {
        type: String,
        default: "text",
      },
      placeholder: {
        type: String,
        default: "",
      },
    },
  };
  </script>
  