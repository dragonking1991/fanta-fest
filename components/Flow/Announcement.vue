<script setup></script>

<template>
  <div
    class="relative bg-[url(public/assets/images/bg-8.jpg)] bg-cover bg-center w-full min-h-screen pt-[48px]"
  >
    <div
      class="absolute top-[12px] left-[12px] text-[20px]"
      @click="$emit('back')"
    >
      <Icon name="arrow-left" class="cursor-pointer" />
    </div>
    <h2 class="mb-[10px] text-mdi text-center font-bold">
      congratulationS<br />
      <span class="text-large text-blue"> [winner] </span>
    </h2>

    <div class="text-sx pt-7 text-center px-[40px]">
      <ImgHolder
        src="public/assets/images/Group 90546.png"
        class="m-auto mb-6 w-[80%]"
      />
      <h3 class="text-xlm">you’ve won a PLAY STATION 5</h3>
      <p class="text-sx font-fs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mi
        blandit, tincidunt tortor eget, tristique mi. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        ec ligula congue.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
