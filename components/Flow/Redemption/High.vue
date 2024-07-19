<script setup></script>

<template>
  <div
    class="relative min-h-screen bg-[url(public/assets/images/bg-6.jpg)] bg-cover bg-center w-full pt-[15px] text-center text-white flex justify-center items-center"
  >
    <div
      class="absolute top-[26px] left-[12px] text-[20px]"
      @click="$emit('back')"
    >
      <Icon name="arrow-left" class="cursor-pointer" />
    </div>
    <div class="w-[74%]">
      <h3 class="text-xl uppercase mb-[10px]">congratulations!</h3>
      <p class="text-sm mb-[10px] font-fs">
        You have redeemed a [Prize]!<br />Please head down to [Booth Name] at
        Fanta Fest from 9 - 10 Nov 2024 to get your prize!
      </p>
      <img src="public/assets/images/image 91.png" alt="image" class="m-auto" />
    </div>
    <div class="absolute bottom-[10%] left-0 w-full flex justify-center px-[15%]">
      <Button variation="white" type="full" class="">back to your wallet</Button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
