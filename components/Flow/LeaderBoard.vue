<script setup></script>

<template>
  <div
    class="relative bg-[url(public/assets/images/bg-7.jpg)] dk:bg-[url(public/assets/images/dk/bg-1.jpg)] bg-cover bg-center w-full min-h-screen pt-[48px] dk:pt-[80px]"
  >
    <div
      class="absolute top-[12px] left-[12px] text-[20px] dk:top-7 dk:left-[33px]"
      @click="$emit('back')"
    >
      <Icon name="arrow-left" class="cursor-pointer" />
    </div>
    <h2 class="mb-[10px] dk:mb-0 text-xl dk:text-enormous text-center font-bold">
      GRAND PRIZE LEADERBOARD
    </h2>
    <div class="flex gap-1 justify-center text-sm dk:text-lg dk:my-10">
      <span
        class="bg-blue uppercase font-sm p-[4px_10px] dk:p-[10px_20px] rounded-[2px]"
      >
        September
      </span>
      <span
        class="bg-white text-orange uppercase font-sm p-[4px_10px] dk:p-[10px_20px] rounded-[2px]"
      >
        October
      </span>
      <span
        class="bg-white text-orange uppercase font-sm p-[4px_10px] dk:p-[10px_20px] rounded-[2px]"
      >
        December
      </span>
    </div>
    <div class="dk:flex container max-w-[739px]">
      <div class="text-sx py-[10px] text-center flex-1">
        <ImgHolder
          src="public/assets/images/Group 90546.png"
          class="m-auto mb-[11.5px] dk:mb-4 w-[50%] dk:w-full aspect-[336/280]"
        />
        <h3 class="text-xlm dk:text-xlx text-blue uppercase mb-2">PLAY STATION 5</h3>
        <p class="text-sx font-bold font-fs">
          The top scorer of September 2024 wins <br />a Sony PlayStation 5!
        </p>
      </div>

      <div class="dk:px-6  flex-1">
        <div class="text-center w-[82%] dk:w-full m-auto text-sx">
          <div class="grid grid-cols-[20%_auto_30%] gap-[5px] mb-[4px]">
            <span class="bg-blue py-[5px] rounded-[7px]">RANK</span>
            <span class="bg-blue py-[5px] rounded-[7px]">NAME</span>
            <span class="bg-blue py-[5px] rounded-[7px]">TOTAL POINTS</span>
          </div>

          <div
            class="grid grid-cols-[20%_50%_30%] gap-[1px] rounded-[7px] overflow-hidden font-fs text-black"
          >
            <span class="bg-white py-[5px] font-bold text-orange">1</span>
            <span class="bg-white py-[5px] font-bold text-orange">Sheldon</span>
            <span class="bg-white py-[5px] font-bold text-orange">335</span>
            <span class="bg-white py-[5px]">2</span>
            <span class="bg-white py-[5px]">Sheldon</span>
            <span class="bg-white py-[5px]">335</span>
            <span class="bg-white py-[5px]">3</span>
            <span class="bg-white py-[5px]">Sheldon</span>
            <span class="bg-white py-[5px]">335</span>
            <span class="bg-white py-[5px]">4</span>
            <span class="bg-white py-[5px]">Sheldon</span>
            <span class="bg-white py-[5px]">335</span>
            <span class="bg-white py-[5px]">5</span>
            <span class="bg-white py-[5px]">Sheldon</span>
            <span class="bg-white py-[5px]">335</span>
            <span class="bg-white py-[5px]">6</span>
            <span class="bg-white py-[5px]">Sheldon</span>
            <span class="bg-white py-[5px]">335</span>
            <span class="bg-white py-[5px]">7</span>
            <span class="bg-white py-[5px]">Sheldon</span>
            <span class="bg-white py-[5px]">335</span>
            <span class="bg-white py-[5px]">8</span>
            <span class="bg-white py-[5px]">Sheldon</span>
            <span class="bg-white py-[5px]">335</span>
            <span class="bg-white py-[5px]">9</span>
            <span class="bg-white py-[5px]">Sheldon</span>
            <span class="bg-white py-[5px]">335</span>
            <span class="bg-white py-[5px]">10</span>
            <span class="bg-white py-[5px]">Sheldon</span>
            <span class="bg-white py-[5px]">335</span>
          </div>
        </div>

        <div class="text-center mt-[10px] dk:mt-2 pb-6 dk:pb-0 px-5 font-fs">
          <p class="text-sx mb-[10px]">
            Leaderboard is refreshed every midnight. The top scorer of the month
            will be chosen and announced the first day of next month. Winner to
            DM our Facebook page to redeem the prize.
          </p>
          <a href="#" class="underline text-xs">Terms & conditions</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
