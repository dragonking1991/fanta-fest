<script setup>
const { name, filled, fontControlled } = defineProps({
  name: {
    default: "",
  },
  filled: {
    default: true,
  },
  fontControlled: {
    default: true,
  },
});
</script>

<template>
  <component
    :is="`icon-${name}`"
    :filled="filled"
    :fontControlled="fontControlled"
  />
</template>
