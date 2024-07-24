<script setup>
const swiped = ref(false)
</script>

<template>
  <FlowRedemption>
    <ImgHolder
      src="assets/images/image 99 (1).png"
      class="m-[0_auto_10px] w-[90%] max-w-[336px]"
    />
    <h3 class="text-xl dk:text-xxl uppercase mb-[10px] dk:mb-[30px]">
      congratulations!
    </h3>
    <p class="text-sm dk:text-base mb-5 font-fs">
      You have redeemed your <br class="dk:hidden" />[<span class="text-blue"
        >Fanta x Tasto tumbler</span
      >]!<br />Do you want to get it now?
    </p>

    <div
      class="relative gradient w-[197px] leading-[32px] m-auto text-center rounded-[20px] overflow-hidden text-blue-light font-fs text-xs"
      @click="swiped = true"
    >
      Slide this to use now
      <div
        class="absolute h-full w-[20%] top-0 right-0 rounded-[20px] bg-white transition-all"
        :class="!swiped? 'right-0' : 'right-[calc(80%)]'"
      ></div>
    </div>
  </FlowRedemption>
</template>

<style scoped lang="scss"></style>
