<script setup>
const { variation, type, disabled } = defineProps({
  variation: {
    default: "yellow",
  },
  type: {
    default: "normals",
  },
  disabled: {
    default: false,
  },
});

const classButton = computed(() => {
  let classVariation = "";

  switch (variation) {
    case "black":
      classVariation = "bg-black text-white";
      break;
    case "white":
      classVariation = "bg-white text-black";
      break;
    case "gradient":
      classVariation = "gradient";
      break;
    default:
      classVariation = "bg-yellow text-white";
      break;
  }
  return classVariation;
});
</script>

<template>
  <button
    :class="`max-w-[280px] leading-10 dk:left-10 uppercase px-6 my-2 whitespace-nowrap text-center font-bold text-sm dk:text-base dk:leading-10 rounded-[40px] cursor-pointer
    ${disabled ? 'bg-gray text-gray1' : classButton}
    ${type === 'full' ? ' w-full' : ''}`
    "
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.gradient {
  background: linear-gradient(
    267.54deg,
    #128dff -19.23%,
    #193abe 12.56%,
    #9747ff 52.01%,
    #ff2fd1 94.98%
  );
}
</style>
