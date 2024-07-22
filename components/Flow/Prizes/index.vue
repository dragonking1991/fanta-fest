<script setup></script>

<template>
  <div
    class="relative bg-[url(public/assets/images/bg-3.jpg)] bg-cover bg-center w-full min-h-screen pt-[48px] text-center"
  >
    <div
      class="absolute top-[12px] left-[12px] text-[20px] text-black"
      @click="$emit('back')"
    >
      <Icon name="arrow-left" class="cursor-pointer" />
    </div>

    <h2 class="gradient text-lg font-bold p-[5px]">you’ve earned 80 points</h2>

    <ImgHolder src="public/assets/images/image 99.png" class="m-auto mt-[22px] mb-[10px] w-[50%]" />

    <div class="mt-[10px] px-5">
      <h3 class="mb-[9px]">
        <span class="text-xl"> 50thb voucher </span><br />
        <span class="text-lg"> 70 points </span>
      </h3>
      <Button type="full" variation="white" @click="$emit('linkPrizesDetail')"> get this prize </Button>
    </div>

    <div class="text-center">
      <div class="p-1 overflow-y-auto mt-[6px] pb-[7px] px-[10px]">
        <div
          class="flex gap-[3px] uppercase font-sm text-center whitespace-nowrap"
        >
          <span class="bg-blue p-[4px_10px] rounded-[2px]"> All </span>
          <span class="bg-white text-orange p-[4px_10px] rounded-[2px]">
            Fanta Fest Experiences
          </span>
          <span class="bg-white text-orange p-[4px_10px] rounded-[2px]">
            gaming
          </span>
          <span class="bg-white text-orange p-[4px_10px] rounded-[2px]">
            music
          </span>
          <span class="bg-white text-orange p-[4px_10px] rounded-[2px]">
            fashion
          </span>
          <span class="bg-white text-orange p-[4px_10px] rounded-[2px]">
            music
          </span>
          <span class="bg-white text-orange p-[4px_10px] rounded-[2px]">
            fashion
          </span>
          <span class="bg-white text-orange p-[4px_10px] rounded-[2px]">
            others
          </span>
        </div>
      </div>
      <p class="font-fs text-xs mb-[5px]">
        Redeem your Fanta Fest exclusive experience now and enjoy it<br />
        at Fanta Fest on 9-10 Nov 2024.
      </p>

      <div
        class="overflow-auto max-h-[35vh] flex flex-wrap gap-[9.31px] px-[30px] mx-[10px] pb-[10px]"
      >
        <div
          class="bg-white aspect-square w-[30%] text-xs rounded-[16px] p-3"
          v-for="n in 24"
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
