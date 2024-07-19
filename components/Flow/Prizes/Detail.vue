<script setup>
const $emit = defineEmits(["back"]);
</script>

<template>
  <div
    class="relative bg-[url(../../public/assets/images/bg-3.jpg)] bg-cover bg-center w-full h-screen pt-[48px] text-center"
  >
    <div class="absolute top-[12px] left-[12px] text-[20px] text-black" @click="$emit('back')">
      <Icon name="arrow-left" class="cursor-pointer" />
    </div>

    <h2 class="text-white text-ex uppercase">
      <span class="text-white">Fanta fest</span><br />
      <span class="text-blue">ticket</span>
    </h2>

    <div
      class="gradient text-center h-[50vh] px-[20px] absolute bottom-0 left-0 w-full"
    >
      <img src="public/assets/images/image 99.png" alt="image" class="m-auto" />
      <h3 class="text-white font-bold mb-[29px]">
        <span class="text-xl">50thb voucher</span><br />
        <span class="text-lg"> 70 points </span>
      </h3>
      <p class="text-sm mb-[10px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula ex,
        varius nec leo a, egestas auctor sapien. In venenatis consectetur
        euismod.
      </p>
      <p class="font-bold mb-[44px]">EXP: XX/XX/XXXX</p>

      <Button type="full" variation="black">REDEEM now</Button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
