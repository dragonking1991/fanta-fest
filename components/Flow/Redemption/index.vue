<script setup></script>

<template>
  <BgSecondary>
    <Icon
      name="arrow-left"
      class="cursor-pointer absolute top-[12px] left-[12px] dk:top-7 dk:left-[33px] text-[20px] dk:text-[30px]"
      @click="$emit('back')"
    />
    <div class="w-[74%] relative max-w-[548px] mx-auto z-10">
      <h3 class="text-xl dk:text-enormous uppercase mb-[10px] dk:mb-[30px]">
        congratulations!
      </h3>
      <p class="text-sm dk:text-base mb-[10px] font-fs max-w-[400px] mx-auto">
        You have redeemed a [<span class="text-blue">Prize</span>]!<br />Please
        head down to [<span class="text-blue">Booth Name</span>] at Fanta Fest
        from 9 - 10 Nov 2024 to get your prize!
      </p>
      <ImgHolder
        src="assets/images/image 91.png"
        class="m-[0_auto_10px] w-[90%] max-w-[336px]"
        aspect="[336/280]"
      />
    </div>
    <div class="flex justify-center px-[15%] z-10">
      <Button
        variation="white"
        type="full"
        class=""
        @click="$emit('linkWallet')"
        >back to your wallet</Button
      >
    </div>
  </BgSecondary>
</template>

<style scoped lang="scss"></style>
