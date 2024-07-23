<script setup></script>

<template>
  <div
    class="relative bg-[url(public/assets/images/bg-8.jpg)] dk:bg-[url(public/assets/images/dk/bg-1.jpg)] bg-cover bg-center w-full min-h-screen pt-[48px] dk:pt-[80px]"
  >
    <div
      class="absolute top-[12px] left-[12px] text-[20px] dk:top-7 dk:left-[33px]"
      @click="$emit('back')"
    >
      <Icon name="arrow-left" class="cursor-pointer" />
    </div>
    <h2 class="mb-[10px] text-mdi dk:text-enormous text-center font-bold">
      congratulationS<br />
      <span class="text-large dk:text-expansive text-blue"> [winner] </span>
    </h2>

    <div class="text-sx pt-7 text-center px-[40px] max-w-[548px] mx-auto">
      <ImgHolder
        src="assets/images/Group 90546.png"
        class="m-auto mb-6 dk:mb-10 w-[50%] dk:w-[336px]"
        aspect="[336/280]"
      />
      <h3 class="text-xlm">you’ve won a PLAY STATION 5</h3>
      <p class="text-sx dk:text-base font-fs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mi
        blandit, tincidunt tortor eget, tristique mi. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        ec ligula congue.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
