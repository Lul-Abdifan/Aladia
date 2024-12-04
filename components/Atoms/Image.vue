<template>
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :class="customClass"
      loading="lazy"
    />
  </template>
  
  <script>
  export default {
    props: {
      src: { type: String, required: true },
      alt: { type: String, default: "" },
      width: { type: [String, Number], default: "auto" },
      height: { type: [String, Number], default: "auto" },
      customClass: { type: String, default: "" },
    },
  };
  </script>
  