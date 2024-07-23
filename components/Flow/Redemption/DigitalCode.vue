<script setup></script>

<template>
  <div
    class="relative min-h-screen bg-[url(public/assets/images/bg-6.jpg)] bg-cover bg-center w-full pt-[15px] text-center flex justify-center items-center pb-[15%]"
  >
    <Icon
      name="arrow-left"
      class="cursor-pointer absolute top-[12px] left-[12px] dk:top-7 dk:left-[33px] text-[20px] dk:text-[30px]"
      @click="$emit('back')"
    />
    <div class="w-[74%]">
      <div class="aspect-rect w-[80%] m-auto">
        <img
          src="public/assets/images/image 57.png"
          alt="image"
          class="object-contain w-full h-full"
        />
      </div>
      <h3 class="text-xl uppercase mb-[10px]">congratulations!</h3>
      <p class="text-sm mb-[10px] font-fs">
        You have redeemed your <br />[<span class="text-blue">Prize</span>]!<br />Please use this code to activate your reward.
      </p>
      <input type="text" class="w-[143px] h-[44px] bg-white text-orange text-xlm rounded-[5px] text-center" value="SV545D" />
    </div>
    <div class="absolute bottom-[10%] left-0 w-full flex justify-center px-[15%]">
      <Button variation="white" type="full" class="">back to your wallet</Button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
