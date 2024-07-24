<script setup>
const { src, aspect } = defineProps({
  src: {
    default: "",
  },
  aspect: {
    default: "",
  },
});
</script>
<template>
  <div :class="aspect ? `aspect-[${aspect}]` : 'aspect-[336/280]'">
    <img :src="src" alt="image" class="object-contain w-full h-full" />
  </div>
</template>
