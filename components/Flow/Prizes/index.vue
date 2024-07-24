<script setup></script>

<template>
  <div
    class="relative bg-[url(public/assets/images/bg-3.jpg)] bg-cover bg-center w-full min-h-screen pt-[48px] dk:pt-[80px] text-center"
  >
    <Icon
      name="arrow-left"
      class="cursor-pointer absolute top-[12px] left-[12px] dk:top-7 dk:left-[33px] text-[20px] dk:text-[30px] text-white"
      @click="$emit('back')"
    />

    <h2
      class="gradient text-lg dk:text-xl font-bold p-[5px] dk:py-[8px] dk:mb-2"
    >
      you’ve earned 80 points
    </h2>

    <ImgHolder
      src="assets/images/image 99.png"
      class="m-[22px_auto_10px] w-[90%] max-w-[336px]"
      
    />

    <div class="mt-[10px] px-5">
      <h3 class="mb-[9px] dk:mb-4">
        <span class="text-xl dk:text-2xl"> 50thb voucher </span><br />
        <span class="text-lg dk:tex-xl"> 70 points </span>
      </h3>
      <Button type="full" variation="white" @click="$emit('linkPrizesDetail')">
        get this prize
      </Button>
    </div>

    <div class="text-center">
      <div
        class="p-1 overflow-y-auto mt-[6px] dk:mt-8 pb-[7px] px-[10px] dk:p-0 dk:mb-4"
      >
        <div
          class="flex gap-[3px] uppercase font-sm text-center whitespace-nowrap dk:justify-center"
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
        class="overflow-auto max-h-[35vh] dk:max-h-none flex flex-wrap dk:flex-nowrap gap-[9.31px] px-[30px] dk:px-0 mx-[10px] dk:mx-0 pb-[10px] dk:overflow-y-auto"
      >
        <div
          class="bg-white aspect-square w-[30%] dk:w-[102px] text-xs rounded-[16px] p-3 whitespace-nowrap"
          v-for="n in 24"
          :key="n"
          @click="$emit('linkPrizesReward')"
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
