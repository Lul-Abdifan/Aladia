<template>
  <div
    class="hidden md:block col-span-1 bg-primary rounded-r-3xl py-12 px-20 max-h-[700px]"
  >
    <div class="text-white font-bold text-4xl -ml-2">{{ title }}</div>
    <div class="text-white font-thin text-sm pt-3">{{ description }}</div>
    <Image
      :src="imageSrc"
      :alt="imageAlt"
      customClass="relative mt-9"
      :width="imageWidth"
      :height="imageHeight"
    />
  </div>
</template>

<script>
import Image from "@/components/Atoms/Image.vue";

export default {
  components: {
    Image,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: "Image",
    },
    imageWidth: {
      type: Number,
      default: 300,
    },
    imageHeight: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style scoped></style>
