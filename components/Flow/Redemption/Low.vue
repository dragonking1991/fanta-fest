<script setup></script>

<template>
  <div
    class="relative min-h-screen bg-[url(public/assets/images/bg-6.jpg)] bg-cover bg-center w-full pt-[15px] text-center  flex justify-center items-center"
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
        You have redeemed your<br /> [<span class="text-blue">Tupperware Tumble</span>]!<br />Please fill in the
        details to <br />get your delivery.
      </p>
      <form action="" class="w-[210px] m-auto mt-5 font-fs">
        <input
          type="text"
          placeholder="Your Name"
          class="text-xs bg-white text-black h-[22px] w-full mb-[10px] rounded-[5px] text-center"
        />
        <input
          type="text"
          placeholder="Phone"
          class="text-xs bg-white text-black h-[22px] w-full mb-[10px] rounded-[5px] text-center"
        />
        <input
          type="text"
          placeholder="Address"
          class="text-xs bg-white text-black h-[22px] w-full mb-[10px] rounded-[5px] text-center"
        />
        <input
          type="text"
          placeholder="Note"
          class="text-xs bg-white text-black h-[22px] w-full mb-[10px] rounded-[5px] text-center"
        />

        <button class="gradient rounded-[48px] leading-10 text-sm dk:text-base mt-[10px] px-[41.5px] font-fp">
          submit now
        </button>
      </form>
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
