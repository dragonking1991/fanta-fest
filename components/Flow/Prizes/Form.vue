<script setup>
const $emit = defineEmits(["back"]);
</script>

<template>
  <div
    class="relative bg-[url(public/assets/images/bg-3.jpg)] bg-cover bg-center w-full h-screen pt-[48px] text-center flex justify-center items-center"
  >
    <Icon
      name="arrow-left"
      class="cursor-pointer absolute top-[12px] left-[12px] dk:top-7 dk:left-[33px] text-[20px] dk:text-[30px]"
      @click="$emit('back')"
    />

    <div>
      <h2 class="text-avg dk:text-enormous uppercase mb-[30px]">congratulations!</h2>

      <p class="text-sm mb-5 dk:mb-[30px] font-fs dk:text-base">
        You have redeemed your<br />
        <span class="text-blue">[Tupperware Tumble]</span>! <br />Fill up the
        form and we will deliver <br />your prize to you!<br /> Delivery will take
        between X -X working days.
      </p>

      <form action="" class="w-[210px] dk:w-[400px] m-auto font-xs">
        <input
          type="text"
          placeholder="Your Name"
          class="text-xs dk:text-sm bg-white text-black h-[22px] dk:h-[41px] w-full mb-[10px] text-center rounded-[5px]"
        />
        <input
          type="text"
          placeholder="Phone"
          class="text-xs dk:text-sm bg-white text-black h-[22px] dk:h-[41px] w-full mb-[10px] text-center rounded-[5px]"
        />
        <input
          type="text"
          placeholder="Address"
          class="text-xs dk:text-sm bg-white text-black h-[22px] dk:h-[41px] w-full mb-[10px] text-center rounded-[5px]"
        />
        <input
          type="text"
          placeholder="Note"
          class="text-xs dk:text-sm bg-white text-black h-[22px] dk:h-[41px] w-full mb-[10px] text-center rounded-[5px]"
        />

        <button
          class="gradient rounded-[48px] leading-10 dk:leading-10 text-sm dk:text-base mt-[10px] w-[150px] m-auto"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
