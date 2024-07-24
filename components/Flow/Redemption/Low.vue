<script setup></script>

<template>
  <FlowRedemption>
    <h3 class="text-xl dk:text-enormous uppercase mb-[10px] dk:mb-[30px]">
      congratulations!
    </h3>
    <p class="text-sm dk:text-base mb-[10px] font-fs max-w-[400px] mx-auto dk:mb-4">
      You have redeemed your<br class="dk:hidden" />
      [<span class="text-blue">Tupperware Tumble</span>]!<br />Please fill in
      the details to <br class="dk:hidden" />get your delivery.
    </p>
    <form action="" class="w-[210px] dk:w-[400px] m-auto font-xs">
        <input
          type="text"
          placeholder="Your Name"
          class="text-xs dk:text-sm bg-white text-black h-[22px] dk:h-[41px] w-full mb-[10px] text-center rounded-[5px] font-fs"
        />
        <input
          type="text"
          placeholder="Phone"
          class="text-xs dk:text-sm bg-white text-black h-[22px] dk:h-[41px] w-full mb-[10px] text-center rounded-[5px] font-fs"
        />
        <input
          type="text"
          placeholder="Address"
          class="text-xs dk:text-sm bg-white text-black h-[22px] dk:h-[41px] w-full mb-[10px] text-center rounded-[5px] font-fs"
        />
        <input
          type="text"
          placeholder="Note"
          class="text-xs dk:text-sm bg-white text-black h-[22px] dk:h-[41px] w-full mb-[10px] text-center rounded-[5px] font-fs"
        />

        <button
          class="gradient rounded-[48px] leading-10 dk:leading-10 text-sm dk:text-base mt-[10px] w-[150px] m-auto"
        >
          Submit
        </button>
      </form>
  </FlowRedemption>
</template>

<style scoped lang="scss"></style>
