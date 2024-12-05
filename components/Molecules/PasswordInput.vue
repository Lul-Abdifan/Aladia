<template>
  <div class="relative mt-4 rounded-md">
    <!-- Left Icon (Font Awesome) for Password -->
    <div class="absolute inset-y-0 left-0 flex items-center pl-3">
      <i class="fas fa-lock text-gray-600 text-lg"></i>
    </div>

    <!-- Input Field -->
    <input
      :type="showPassword ? 'text' : 'password'"
      :placeholder="placeholder"
      class="block w-full h-11 rounded-full py-1.5 pl-10 text-gray-900 bg-[#F2F2F2] placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-gray-300 focus:ring-primary focus:outline-none"
    />

    <!-- Right Icon to Toggle Password Visibility -->
    <div class="absolute inset-y-0 right-3 flex items-center">
      <button type="button" @click="togglePasswordVisibility">
        <i
          :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
          class="text-gray-600 text-lg"
        ></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.$emit("update:showPassword", !this.showPassword);
    },
  },
};
</script>
