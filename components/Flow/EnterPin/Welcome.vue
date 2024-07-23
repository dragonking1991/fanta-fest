<script setup>
const animate = ref(false);
onMounted(() => {
  setTimeout(() => {
    animate.value = true;
  }, 200);
});
</script>

<template>
  <div
    class="before-enter relative h-screen z-10 pt-[48px] overflow-hidden dk:max-w-[718px] mx-auto"
  >
    <h2
      class="mb-[10px] uppercase text-big dk:text-enormous text-center font-bold"
    >
      earn the<br />
      <span class="text-blue text-huge">
        extra<br class="dk:hidden" />
        points!
      </span>
    </h2>

    <img
      src="public/assets/images/image 16.png"
      alt="image"
      class="absolute dk:left-[53%] dk:z-10 left-[10%] dk:w-[174px] w-[calc(131/375*100%)] scale-[1.3] dk:scale-1 rotate-[20deg] delay-75 ease-in-out transition-all duration-500"
      :class="animate ? 'bottom-[45%] dk:bottom-[27%]' : 'bottom-[150%]'"
    />
    <img
      src="public/assets/images/image 16.png"
      alt="image"
      class="absolute dk:left-[20%] left-[70%] dk:w-[168px] w-[calc(136/375*100%)] scale-[1.3] dk:scale-1 rotate-[20deg] delay-75 ease-in-out transition-all duration-500"
      :class="animate ? 'bottom-[22%] dk:bottom-[32%]' : 'bottom-[150%]'"
    />
    <img
      src="public/assets/images/image 16.png"
      alt="image"
      class="absolute dk:left-[40%] left-[35%] dk:w-[174px] w-[calc(140/375*100%)] scale-[1.3] dk:scale-1 rotate-[-35.7deg] delay-75 ease-in-out transition-all duration-500"
      :class="animate ? 'bottom-[23%] dk:bottom-[13%]' : 'bottom-[150%]'"
    />
    <img
      src="public/assets/images/image 16.png"
      alt="image"
      class="absolute dk:left-[30%] left-[-6%] dk:w-[208px] dk:z-10 w-[calc(198/375*100%)] scale-[1.2] dk:scale-1 rotate-[-52.08deg] delay-0 ease-in-out transition-all duration-500"
      :class="animate ? 'bottom-[20%] dk:bottom-[20%]' : 'bottom-[150%]'"
    />
    <img
      src="public/assets/images/image 16.png"
      alt="image"
      class="absolute dk:left-[8%] left-[50%] dk:w-[255px] w-[calc(232/375*100%)] scale-[1.4] dk:scale-1 rotate-[18.8deg] delay-0 ease-in-out transition-all duration-500"
      :class="animate ? 'bottom-[35%] dk:bottom-[8%]' : 'bottom-[150%]'"
    />
    <img
      src="public/assets/images/image 16.png"
      alt="image"
      class="absolute dk:left-[55%] left-[38%] dk:w-[299px] w-[calc(162/375*100%)] scale-[1.5] dk:scale-1 rotate-[40.82deg] delay-0 ease-in-out transition-all duration-500"
      :class="animate ? 'bottom-[32%] dk:bottom-[5%]' : 'bottom-[150%]'"
    />

    <div
      class="absolute bottom-0 left-0 w-full z-20 dk:h-[168px] overflow-hidden"
    >
      <div></div>
      <img src="public/assets/images/DJ table.png" alt="image" class="w-full" />
      <span class="text-sl absolute top-[50%] left-[50%] translate-x-[-50%]"
        >Loading...</span
      >
    </div>
  </div>
</template>
