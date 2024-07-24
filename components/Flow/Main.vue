<script setup></script>

<template>
  <BgMain>
    <ul class="absolute top-4 right-5 text-[29px] dk:text-[40px] dk:flex dk:gap-3">
      <li class="mb-[10px] cursor-pointer" @click="$emit('linkProfile')">
        <IconProfile />
      </li>
      <li class="mb-[10px] cursor-pointer" @click="$emit('linkWallet')">
        <IconWallet />
      </li>
      <li class="mb-[10px] cursor-pointer" @click="$emit('linkSupport')">
        <IconQuestion />
      </li>
    </ul>
    <img
      src="public/assets/images/dk/About.png"
      alt="image"
      class="absolute top-0 left-2 cursor-pointer"
      @click="$emit('linkAbout')"
    />
    <img
      src="public/assets/images/dk/bg-bottle2.png"
      alt="image"
      class="absolute hidden dk:block top-0 left-[50%] translate-x-[-50%] "
    />
    <img
      src="public/assets/images/bg-bottle.png"
      alt="image"
      class="absolute top-[5%] left-[50%] translate-x-[-50%] dk:hidden"
    />

    <div class="pt-[160px] dk:pt-[105px] max-w-[300px] m-auto relative min-h-screen flex flex-col justify-between dk:justify-start">

      <div class="text-center px-[34px] dk:px-[10px]">
        <div class="aspect-rect w- dk:w-[95%] m-auto mb-4">
          <img
            src="public/assets/images/dk/image 71.png"
            alt="image"
            class="object-contain w-full h-full"
          />
        </div>
        <h3 class="text-xxl dk:text-ext leading-[0.8] mb-2 dk:mb-[62px]">
          SO SO EXTRA<br />
          <small class="text-lg dk:text-2xl">FOOD.MUSIC.GAMING</small>
        </h3>
      </div>
      <div class="px-[10%] dk:px-0 text-center pb-10">
        <Button type="full" variation="black" @click="$emit('linkEnterPin')">
          earn points
        </Button>
        <Button type="full" variation="black" @click="$emit('linkPrizes')">
          redeem prizes
        </Button>
        <Button
          type="full"
          variation="gradient"
          @click="$emit('linkLeaderBoard')"
          class="dk:mb-[15px]"
        >
          GRAND PRIZE LEADERBOARD
        </Button>
        <a
          href="#"
          class="underline text-shadow font-fs text-sx dk:text-base "
          @click="$emit('linkHow')"
        >
          How to join
        </a>
      </div>
    </div>
  </BgMain>
</template>

<style scoped lang="scss"></style>
