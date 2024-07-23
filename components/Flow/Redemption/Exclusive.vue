<script setup></script>

<template>
  <div
    class="relative min-h-screen bg-[url(public/assets/images/bg-6.jpg)] bg-cover bg-center w-full pt-[15px] text-center  flex justify-center items-center pb-[20%]"
  >
    <Icon
      name="arrow-left"
      class="cursor-pointer absolute top-[12px] left-[12px] dk:top-7 dk:left-[33px] text-[20px] dk:text-[30px]"
      @click="$emit('back')"
    />
    <div class="w-[74%]">
      <div class="aspect-square w-[70%] m-auto mb-5">
        <img
          src="public/assets/images/image 99 (1).png"
          alt="image"
          class="object-contain w-full h-full"
        />
      </div>
      <h3 class="text-xl uppercase mb-[10px]">congratulations!</h3>
      <p class="text-sm mb-5 font-fs">
        You have redeemed your <br />[<span class="text-blue">Fanta x Tasto tumbler</span>]!<br />Do you want
        to get it now?
      </p>

      <div
        class="relative gradient w-[197px] leading-[32px] m-auto text-center rounded-[20px] overflow-hidden text-blue-light font-fs text-xs"
      >
        Slide this to use now
        <div class="absolute h-full w-[20%] top-0 right-0 rounded-[20px] bg-white"></div>
      </div>
    </div>
    <div
      class="absolute bottom-[10%] left-0 w-full flex justify-center px-[15%]"
    >
      <Button variation="white" type="full" class=""
        >back to your wallet</Button
      >
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
