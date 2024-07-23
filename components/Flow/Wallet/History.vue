<script setup></script>

<template>
  <div class="relative bg-[url(public/assets/images/bg-3.jpg)] bg-cover w-full pt-[15px] text-center ">
    <Icon
      name="arrow-left"
      class="cursor-pointer absolute top-[12px] left-[12px] dk:top-7 dk:left-[33px] text-[20px] dk:text-[30px]"
      @click="$emit('back')"
    />

    <h2 class="mb-25px text-mdx dk:text-enormous">history</h2>

    <div class="max-h-[calc(100vh-60px)] z-10 relative px-[33px] overflow-auto max-w-[700px] mx-auto">
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
