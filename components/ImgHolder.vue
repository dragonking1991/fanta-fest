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
      :src="src"
      alt="image"
      class="object-contain w-full h-full"
    />
  </div>
</template>
