<script setup>

</script>

<template>
  <div
    class="relative bg-[url(public/assets/images/bg-3.jpg)] bg-cover bg-center w-full min-h-screen pt-[48px]"
  >
    <div class="absolute top-[12px] left-[12px] text-[20px]" @click="$emit('back')">
      <Icon name="arrow-left" class="cursor-pointer" />
    </div>
    <h2 class="mb-[10px] uppercase text-md text-center font-bold ">
      congrats! <br />you’ve got a <br />
      <span class="text-blue"> free 5GB internet package </span>
    </h2>

    <img
      src="public/assets/images/image 109.png"
      alt="image"
      class="m-auto"
    />

    <div class="text-center my-[10px] px-5 font-fs">
      <Button variation="black" type="full">redeem in Wallet</Button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
