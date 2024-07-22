<script setup>
</script>

<template>
  <BgMain>
    <div
      class="pt-[160px]"
    >
      <ul class="absolute top-4 right-5 text-[29px] dk:flex">
        <li class="mb-[10px] cursor-pointer">
          <IconProfile @click="$emit('linkProfile')" />
        </li>
        <li class="mb-[10px] cursor-pointer">
          <IconWallet @click="$emit('linkWallet')" />
        </li>
        <li class="mb-[10px] cursor-pointer">
          <IconQuestion @click="$emit('linkQuestion')" />
        </li>
      </ul>
      <img
        src="public/assets/images/Group 90563.png"
        alt="image"
        class="absolute top-0 left-2 cursor-pointer"
        @click="$emit('linkAbout')"
      />
  
      <div class="text-center px-[34px]">
        <img
          src="public/assets/images/image 71.png"
          alt="image"
          class="m-auto mb-[14px]"
        />
        <h3 class="text-xxl leading-[0.8] mb-[62px]">
          SO SO EXTRA<br />
          <small class="text-lg">FOOD.MUSIC.GAMING</small>
        </h3>
        <div class="absolute bottom-[5%] left-0 w-full px-[10%]">
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
          >
            GRAND PRIZE LEADERBOARD
          </Button>
          <a
            href="#"
            class="underline text-shadow font-fs text-sx"
            @click="$emit('linkHow')"
          >
            How to join
          </a>
        </div>
      </div>
    </div>
  </BgMain>
</template>

<style scoped lang="scss"></style>
