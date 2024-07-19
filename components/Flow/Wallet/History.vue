<script setup></script>

<template>
  <div class="relative bg-[url(public/assets/images/bg-3.jpg)] bg-cover w-full pt-[15px] text-center ">
    <div
      class="absolute top-[26px] left-[12px] text-[20px]"
      @click="$emit('back')"
    >
      <Icon name="arrow-left" class="cursor-pointer" />
    </div>

    <h2 class="mb-25px text-mdx">history</h2>

    <div class="max-h-[calc(100vh-60px)] z-10 relative px-[33px] overflow-auto">
      <div
        class="flex justify-between items-start border-b py-[10px]"
        v-for="n in 20"
        :key="n"
      >
        <div class="font-fs font-sm text-left">
          Point earned <br />
          <span class="text-blue"> Popmart voucher </span><br />
          <span class="text-xs">Jul 05, 2024</span>
        </div>
        <strong class="mt-[5px]">+80</strong>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
