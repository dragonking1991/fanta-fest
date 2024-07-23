<script setup>
const $emit = defineEmits(["back"]);
</script>

<template>
  <div
    class="relative bg-[url(public/assets/images/bg.jpg)] dk:bg-[url(public/assets/images/dk/bg-2.jpg)] bg-cover bg-center w-full h-screen pt-[48px] dk:pt-[80px] text-center flex flex-col justify-around dk:justify-center"
  >
    <Icon
      name="arrow-left"
      class="cursor-pointer absolute top-[12px] left-[12px] dk:top-7 dk:left-[33px] text-[20px] dk:text-[30px]"
      @click="$emit('back')"
    />
    <div class="dk:mb-5">
      <h2 class="text-md uppercase">
        congratulations!<br />
        you got a
        <span class="text-blue">FF ticket!</span>
      </h2>

      <ImgHolder
        src="assets/images/image 99.png"
        class="m-[22px_auto_10px] w-[90%] max-w-[336px]"
        aspect="[336/280]"
      />
      <p class="text-sm px-5 dk:mb-4 font-fs">
        To claim this, simply flash the QR code stored in your wallet on event
        day.
      </p>
    </div>
    <div class="flex flex-col items-center">
      <Button type="full" variation="black" @click="$emit('linkPrizes')"
        >REDEEM ANOTHER PRIZE</Button
      >
      <Button type="full" variation="white" @click="$emit('linkWallet')"
        >VIEW MY WALLET</Button
      >
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
