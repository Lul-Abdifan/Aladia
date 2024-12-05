<template>
  <div class="relative mt-4 rounded-md">
    <!-- Conditionally show the Left Icon for email type -->
    <div v-if="type === 'email'" class="absolute inset-y-0 left-0 flex items-center pl-3">
      <i class="fas fa-envelope text-gray-600 text-lg"></i>
    </div>

    <!-- Conditionally show the Left Icon for text type -->
    <div v-if="type === 'text'" class="absolute inset-y-0 left-0 flex items-center pl-3">
      <i class="fas fa-user text-gray-600 text-lg"></i> <!-- Person icon for text type -->
    </div>

    <div v-if="type === 'password'" class="absolute inset-y-0 left-0 flex items-center pl-3">
      <i class="fas fa-lock text-gray-600 text-lg"></i>
    </div>
   

    <!-- Input Field -->
    <input
      :type="type"
      :placeholder="placeholder"
      class="block w-full h-11 rounded-full py-1.5 pl-10 pr-16 text-gray-900 bg-[#F2F2F2] placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-gray-300 focus:ring-primary focus:outline-none"
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
