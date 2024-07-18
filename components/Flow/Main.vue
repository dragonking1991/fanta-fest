<script setup>
</script>

<template>
  <div
    class="bg-[url(../../public/assets/images/bg-landing.jpg)] bg-cover bg-center w-full h-screen flex justify-center items-center"
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
      <a href="#" class="underline text-shadow"  @click="$emit('linkHow')">How to join</a>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
