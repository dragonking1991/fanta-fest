<script setup></script>

<template>
  <div
    class="relative min-h-screen bg-[url(public/assets/images/bg-6.jpg)] bg-cover bg-center w-full pt-[15px] text-center  flex justify-center items-center pb-[15%]"
  >
    <div
      class="absolute top-[26px] left-[12px] text-[20px]"
      @click="$emit('back')"
    >
      <Icon name="arrow-left" class="cursor-pointer" />
    </div>
    <div class="w-[65%]">
      <h3 class="text-xl uppercase mb-[10px]">congratulations!</h3>
      <p class="text-sm mb-[10px] font-fs">
        You have redeemed a [<span class="text-blue">FF Ticket</span>]! <br />Please use the QR Code below to enter the event!
      </p>
      <img src="public/assets/images/image 3.png" alt="image" class="m-auto" />
    </div>
    <div class="absolute bottom-[10%] left-0 w-full flex justify-center px-[15%]">
      <Button variation="white" type="full" class="">back to your wallet</Button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
