<script setup>
const inputCode = ref(null);
const copied = ref(false);
const copyText = () => {
  clipboardText(inputCode.value,() =>{
    copied.value = true
  });
};
</script>

<template>
  <FlowRedemption>
    <ImgHolder
      src="assets/images/image 57.png"
      class="m-[0_auto_10px] w-[90%] max-w-[336px]"
      
    />
    <h3 class="text-xl dk:text-xxl uppercase mb-[10px] dk:mb-4">
      congratulations!
    </h3>
    <p class="text-sm dk:text-base mb-[10px] font-fs max-w-[400px] mx-auto">
      You have redeemed your <br class="dk:hidden" />[
      <span class="text-blue">Prize </span>]!<br />Please use this code to
      activate your reward.
    </p>

    <div class="relative mx-auto w-[143px] text-orange" @click="copyText">
      <Icon
        name="copy"
        class="absolute top-[10px] right-[15px] text-[15px] text-gray z-10"
        :class="copied ? 'text-white' : 'text-gray'"
      />
      <input
        readonly="true"
        ref="inputCode"
        type="text"
        class="w-[143px] h-[44px] bg-white text-orange text-xlm rounded-[5px] text-center cursor-pointer"
        :class="copied ? 'bg-blue-light' : 'bg-white'"
        value="SV545D"
      />
    </div>
  </FlowRedemption>
</template>

<style scoped lang="scss"></style>
