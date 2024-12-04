<template>
  <button
    :class="[
      'w-full', 
      `h-${size}`, 
      `rounded-${rounded}`, 
      bgColor, 
      textColor, 
      'font-semibold', 
      `hover:${hoverBgColor}`, 
      'transition-all'
    ]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    size: {
      type: String,
      default: "11", 
    },
    rounded: {
      type: String,
      default: "full", 
    },
    bgColor: {
      type: String,
      default: "bg-primary", 
    },
    hoverBgColor: {
      type: String,
      default: "bg-secondary", 
    },
    textColor: {
      type: String,
      default: "text-white", 
    },
  },
  methods: {
    handleClick() {
      this.$emit("click"); 
    },
  },
};
</script>
