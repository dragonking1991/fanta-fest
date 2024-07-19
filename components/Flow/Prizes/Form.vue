<script setup>
const $emit = defineEmits(["back"]);
</script>

<template>
  <div
    class="relative bg-[url(../../public/assets/images/bg-6.jpg)] bg-cover bg-center w-full h-screen pt-[48px] text-center flex justify-center items-center"
  >
    <div class="absolute top-[12px] left-[12px] text-[20px] text-black" @click="$emit('back')">
      <Icon name="arrow-left" class="cursor-pointer" />
    </div>

    <div>
      <h2 class=" text-avg uppercase mb-[30px]">congratulations!</h2>

      <p class="text-sm mb-5 font-fs">
        You have redeemed your<br />
        <span class="text-blue">[Tupperware Tumble]</span>! <br />
        Please fill in the details to <br />get your delivery.
      </p>

      <form action="" class="w-[210px] m-auto font-xs">
        <input
          type="text"
          placeholder="Your Name"
          class="text-xs bg-white text-black h-[22px] w-full mb-[10px] text-center rounded-[5px]"
        />
        <input
          type="text"
          placeholder="Phone"
          class="text-xs bg-white text-black h-[22px] w-full mb-[10px] text-center rounded-[5px]"
        />
        <input
          type="text"
          placeholder="Address"
          class="text-xs bg-white text-black h-[22px] w-full mb-[10px] text-center rounded-[5px]"
        />
        <input
          type="text"
          placeholder="Note"
          class="text-xs bg-white text-black h-[22px] w-full mb-[10px] text-center rounded-[5px]"
        />

        <button class="gradient rounded-[48px] leading-10 text-sm mt-[10px] w-[150px] m-auto">
          delivery now
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
