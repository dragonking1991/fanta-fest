<script setup>
</script>

<template>
  <div
    class="relative bg-[url(../../public/assets/images/bg-5.jpg)] bg-cover bg-center w-full h-screen flex justify-center items-center"
  >
    <ul class="absolute top-4 right-5 text-white text-[29px]">
      <li class="mb-[10px]">
        <IconProfile @click="$emit('linkProfile')" />
      </li>
      <li class="mb-[10px]">
        <IconWallet @click="$emit('linkWallet')" />
      </li>
      <li class="mb-[10px]">
        <IconQuestion @click="$emit('linkQuestion')" />
      </li>
    </ul>
    <img
      src="../../public/assets/images/Group 90563.png"
      alt="image"
      class="absolute top-0 left-2 cursor-pointer"
      @click="$emit('linkAbout')"
    />

    <div class="text-center px-[34px] text-white">
      <img
        src="../../public/assets/images/image 71.png"
        alt="image"
        class="m-auto mb-[14px] mt-[70px]"
      />
      <h3 class="text-xxl leading-[0.8] mb-[62px]">
        SO SO EXTRA<br />
        <small class="text-lg">FOOD.MUSIC.GAMING</small>
      </h3>
      <Button type="full" variation="black" @click="$emit('linkEarn')">earn points</Button>
      <Button type="full" variation="black" @click="$emit('linkRedeem')">redeem prizes</Button>
      <Button type="full" variation="gradient" @click="$emit('linkLeader')">GRAND PRIZE LEADERBOARD</Button>
      <a href="#" class="underline text-shadow font-fs text-sx"  @click="$emit('linkHow')">How to join</a>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
