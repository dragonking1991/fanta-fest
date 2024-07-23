<script setup></script>

<template>
  <div
    class="relative min-h-screen bg-[url(public/assets/images/bg-6.jpg)] bg-cover bg-center w-full pt-[15px] text-center flex justify-center items-center pb-[10%]"
  >
    <Icon
      name="arrow-left"
      class="cursor-pointer absolute top-[12px] left-[12px] dk:top-7 dk:left-[33px] text-[20px] dk:text-[30px]"
      @click="$emit('back')"
    />
    <div class="w-[74%]">
      <h3 class="text-xl uppercase mb-[10px]">congratulations!</h3>
      <p class="text-sm mb-[10px] font-fs">
        You have redeemed a [<span class="text-blue">Prize</span>]! <br />Please head down to [<span class="text-blue">Booth Name</span>]<br /> at
        Fanta Fest from 9 - 10 Nov 2024<br /> to get your prize!
      </p>
      <img src="public/assets/images/image 91.png" alt="image" class="m-auto" />
    </div>
    <div
      class="absolute bottom-[10%] left-0 w-full flex justify-center px-[15%]"
    >
      <Button
        variation="white"
        type="full"
        class=""
        @click="$emit('linkWallet')"
        >back to your wallet</Button
      >
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
