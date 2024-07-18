<script setup>

</script>

<template>
  <div
    class="relative bg-[url(../../public/assets/images/bg-3.jpg)] bg-cover bg-center w-full h-screen pt-[48px] text-center"
  >
    <div class="absolute top-[12px] left-[12px] text-[20px] text-black" @click="$emit('back')">
      <Icon name="arrow-left" />
    </div>

    <h2 class="gradient text-white text-lg font-bold p-[5px]">
      you’ve earned 80 points
    </h2>

    <img src="public/assets/images/image 99.png" alt="image" class="m-auto" />

    <div class="text-center h-screen px-[20px]">
      <h3 class="text-white font-bold mb-[34px]">
        <span class="text-xl"> 50thb voucher </span><br />
        <span class="text-lg"> 70 points </span>
      </h3>

      <Button type="full" variation="white"> get this prize </Button>

      <div class="p-1 overflow-y-auto mt-[10px] mb-4">
        <div class="flex gap-[3px] uppercase font-sm text-center">
          <span class="bg-blue text-white rounded-[2px] min-w-[48px]">
            All
          </span>
          <span class="bg-white text-orange rounded-[2px] min-w-[48px]">
            snack
          </span>
          <span
            class="bg-white text-orange p-[0px_10px] rounded-[2px] min-w-[48px]"
          >
            gaming
          </span>
          <span
            class="bg-white text-orange p-[0px_10px] rounded-[2px] min-w-[48px]"
          >
            music
          </span>
          <span
            class="bg-white text-orange p-[0px_10px] rounded-[2px] min-w-[48px]"
          >
            fashion
          </span>
          <span
            class="bg-white text-orange p-[0px_10px] rounded-[2px] min-w-[48px]"
          >
            others
          </span>
        </div>
      </div>

      <div
        class="overflow-auto max-h-[250px] flex flex-wrap gap-[9.31px] px-[11px] mx-[10px]"
      >
        <div
          class="bg-white aspect-square w-[30%] text-xs rounded-[16px] p-3"
          v-for="n in 10"
          :key="n"
        >
          <div class="aspect-[76/50]">
            <img
              src="public/assets/images/prizes/image 83-1.png"
              alt="image"
              class="object-contain object-center w-full h-full"
            />
          </div>
          <p>
            <span class="text-black">70thb voucher</span><br />
            <span class="text-orange">60 points</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
