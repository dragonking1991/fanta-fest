<script setup></script>

<template>
  <BgSecondary>
    <Icon
      name="arrow-left"
      class="text-white cursor-pointer absolute top-[12px] left-[12px] dk:top-7 dk:left-[33px] text-[20px] dk:text-[30px]"
      @click="$emit('back')"
    />
    <div class="w-[74%] relative max-w-[548px] mx-auto z-10">
      <slot />
    </div>

    <div class="flex justify-center px-[15%] z-10 dk:mt-[22px]">
      <Button
        variation="white"
        type="full"
        class=""
        @click="$emit('linkWallet')"
      >
        back to your wallet
      </Button>
    </div>
  </BgSecondary>
</template>

<style scoped lang="scss"></style>
