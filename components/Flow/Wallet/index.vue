<script setup>

</script>

<template>
  <div
    class="relative bg-[url(../../public/assets/images/bg-3.jpg)] bg-cover bg-center w-full pt-[48px] text-center"
  >
    <div class="absolute top-[12px] left-[12px] text-[20px] text-black" @click="$emit('back')">
      <Icon name="arrow-left" />
    </div>

    <img
      src="../../public/assets/images/DJ table.png"
      alt="image"
      class="absolute bottom-0 left-0 w-full"
    />

    <div class="flex flex-col justify-around h-screen">
      <h2 class="gradient text-white text-lg font-bold p-[5px] mb-[51px]">
        you’ve earned 80 points
      </h2>

      <h3 class="text-mdx mb-[14px]">Your Prizes</h3>

      <div class="px-[20px]">
        <Button type="full" variation="white">use now</Button>
        <Button type="full" variation="black">REDEEM ANOTHER PRIZE</Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
