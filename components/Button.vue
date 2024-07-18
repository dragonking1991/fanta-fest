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
  const classType = type === "full" ? " w-full" : "";
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

  disabled && (classVariation = "bg-gray text-gray1");
  return `${disabled} px-2 leading-10 px-6 my-2 ${classVariation} whitespace-nowrap text-center font-bold text-sm uppercase rounded-[40px] cursor-pointer ${classType}`;
});
</script>

<template>
  <button :class="classButton" :disabled="disabled">
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
