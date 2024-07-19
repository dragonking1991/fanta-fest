<script setup>
const $emit = defineEmits(["back"]);
</script>

<template>
  <div
    class="relative bg-[url(../../public/assets/images/bg-3.jpg)] bg-cover bg-center w-full h-screen pt-[48px] text-center"
  >
    <div class="absolute top-[12px] left-[12px] text-[20px] text-black" @click="$emit('back')">
      <Icon name="arrow-left" class="cursor-pointer" />
    </div>

    <h2 class="text-white text-md uppercase">
      congratulations!<br />
      you got a
      <span class="text-blue">FF ticket!</span>
    </h2>

    <img src="public/assets/images/image 99.png" alt="image" class="m-auto" />
    <p class="text-sm font-bold">
      To claim this, simply flash the QR code stored in your wallet on event
      day.
    </p>

    <Button type="full" variation="black">REDEEM ANOTHER PRIZE</Button>
    <Button type="full" variation="white">VIEW MY WALLET</Button>
  </div>
</template>

<style scoped lang="scss"></style>
