<script setup>
const { src, aspect } = defineProps({
  src: {
    default: "",
  },
  aspect: {
    default: "square",
  },
});
const ratio = computed(() => {
  return `aspect-${aspect}`;
});

</script>
<template>
  <div :class="ratio">
    <img
      src="public/assets/images/image 99.png"
      alt="image"
      class="object-contain w-full h-full"
    />
  </div>
</template>
