<template>
  <div class="relative bg-[url(public/assets/images/bg.jpg)] bg-cover">
    <div class="relative h-screen text-center px-[5%]">
      <h2 class="text-extra absolute top-[56px] left-0 w-full z-10">
        congratulations <br />
        <span class="text-vast">you’ve earned</span>
      </h2>
      <div class="absolute top-[42px] left-[50%] translate-x-[-50%]">
        <div
          class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10"
        >
          <span class="text-massive">80</span><br />
          <small class="text-xlx">POINTS</small>
        </div>

        <img src="public/assets/images/Bottle.png" alt="image" />
        <div class="absolute top-0 left-0 animate-wave">
          <img src="public/assets/images/Bottle2.png" alt="image" />
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 w-full left-0 p-5">
      <Button type="full" variation="black" @click="$emit('enterPin')">
        Submit Another PIN
      </Button>
      <Button type="full" variation="white" @click="$emit('linkPrizes')">
        Redeem Your Prize
      </Button>
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
  animation: animateTop 2s ease-in-out infinite,
    animateBottom 2s ease-in-out infinite;
}

@keyframes animateTop {
  0% {
    clip-path: polygon(0% 45%, 100% 45%, 100% 100%, 0% 100%);
  }
  50% {
    clip-path: polygon(0% 63%, 100% 63%, 100% 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(0% 45%, 100% 45%, 100% 100%, 0% 100%);
  }
}

@keyframes animateBottom {
  0%,
  100% {
    clip-path: polygon(0% 54%, 7% 54%, 13% 53%, 20% 53%, 30% 52%, 33% 52%, 37% 52%, 44% 53%, 51% 56%, 57% 58%, 68% 59%, 68% 59%, 79% 59%, 86% 58%, 90% 57%, 94% 56%, 98% 55%, 100% 54%, 100% 100%, 0% 100%);
  }
  50% {
    clip-path: polygon(0% 58%, 4% 58%, 9% 59%, 14% 59%, 20% 60%, 29% 61%, 36% 61%, 45% 60%, 52% 58%, 60% 57%, 67% 56%, 74% 54%, 79% 53%, 85% 52%, 89% 52%, 94% 53%, 96% 53%, 100% 54%, 100% 100%, 0% 100%);
  }
}
</style>
