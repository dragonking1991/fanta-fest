<script setup>
const { process } = defineProps({
  process: {
    default: 0,
  },
});
const bottleAnimate = ref(null);
</script>
<template>
  <div
    class="relative bg-[url(public/assets/images/bg.jpg)] dk:bg-[url(public/assets/images/dk/bg-2.jpg)] bg-center bg-cover"
  >
    <div
      class="relative h-screen text-center px-[5%] flex flex-col justify-around dk:justify-center"
    >
      <div class="relative">
        <h2 class="text-extra absolute top-[56px] left-0 w-full z-10">
          congratulations <br />
          <span class="text-vast">you’ve earned</span>
        </h2>
        <div class="mx-auto">
          <div
            class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10"
          >
            <span class="text-massive">{{ process }}</span
            ><br />
            <small class="text-xlx">POINTS</small>
          </div>
          <img
            src="public/assets/images/Bottle.png"
            alt="image"
            class="m-auto"
          />
          <div
            class="absolute top-0 left-[50%] translate-x-[-50%] animate-wave"
            ref="bottleAnimate"
            :style="{
              '--process': process + '%',
            }"
          >
            <img src="public/assets/images/Bottle2.png" alt="image" />
          </div>
        </div>
      </div>
      <div class="p-5 flex flex-col items-center">
        <Button type="full" variation="black" @click="$emit('enterPin')">
          Submit Another PIN
        </Button>
        <Button type="full" variation="white" @click="$emit('linkPrizes')">
          Redeem Your Prize
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.gradient-bt {
  background: linear-gradient(
    180.01deg,
    #128dff 20.03%,
    #193abe 42.28%,
    #9747ff 69.9%,
    #ff2fd1 99.99%
  );
}

.animate-wave {
  --process: 0%;
  animation: animate 2s ease-in-out infinite;
}

@keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0% calc(100% - var(--process) + 4%),
      7% calc(100% - var(--process) + 4%),
      13% calc(100% - var(--process) + 3%),
      20% calc(100% - var(--process) + 3%),
      30% calc(100% - var(--process) + 2%),
      33% calc(100% - var(--process) + 2%),
      37% calc(100% - var(--process) + 2%),
      44% calc(100% - var(--process) + 3%),
      51% calc(100% - var(--process) + 6%),
      57% calc(100% - var(--process) + 8%),
      68% calc(100% - var(--process) + 9%),
      68% calc(100% - var(--process) + 9%),
      79% calc(100% - var(--process) + 9%),
      86% calc(100% - var(--process) + 8%),
      90% calc(100% - var(--process) + 7%),
      94% calc(100% - var(--process) + 6%),
      98% calc(100% - var(--process) + 5%),
      100% calc(100% - var(--process) + 4%),
      100% 100%,
      0% 100%
    );
  }
  50% {
    clip-path: polygon(
      0% calc(100% - var(--process) + 8%),
      4% calc(100% - var(--process) + 8%),
      9% calc(100% - var(--process) + 9%),
      14% calc(100% - var(--process) + 9%),
      20% calc(100% - var(--process) + 10%),
      29% calc(100% - var(--process) + 11%),
      36% calc(100% - var(--process) + 11%),
      45% calc(100% - var(--process) + 10%),
      52% calc(100% - var(--process) + 8%),
      60% calc(100% - var(--process) + 7%),
      67% calc(100% - var(--process) + 6%),
      74% calc(100% - var(--process) + 4%),
      79% calc(100% - var(--process) + 3%),
      85% calc(100% - var(--process) + 2%),
      89% calc(100% - var(--process) + 2%),
      94% calc(100% - var(--process) + 3%),
      96% calc(100% - var(--process) + 3%),
      100% calc(100% - var(--process) + 4%),
      100% 100%,
      0% 100%
    );
  }
}
</style>
