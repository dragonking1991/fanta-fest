<script setup>

</script>

<template>
  <div
    class="relative bg-[url(public/assets/images/bg.jpg)] dk:bg-[url(public/assets/images/dk/bg-2.jpg)] bg-cover bg-center w-full h-screen pt-[48px] dk:pt-[80px] text-center flex flex-col justify-around dk:justify-center"
  >
    <Icon
      name="arrow-left"
      class="text-white cursor-pointer absolute top-[12px] left-[12px] dk:top-7 dk:left-[33px] text-[20px] dk:text-[30px]"
      @click="$emit('back')"
    />
    <div class="dk:mb-5">
      <h2 class="text-md uppercase">
      congrats! <br />you’ve got a <br />
      <span class="text-blue"> free 5GB internet package </span>
    </h2>


    <ImgHolder src="assets/images/image 109.png" class="m-[22px_auto_10px] w-[90%] max-w-[336px]" />
    </div>
    <div class="flex flex-col items-center">
      <Button variation="black" type="full" @click="$emit('linkWallet')">redeem in Wallet</Button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
