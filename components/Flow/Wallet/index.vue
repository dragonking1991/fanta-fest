<script setup>
const prizes = ref([
  {
    desc: "1x fanta fest ticket",
    img: "assets/images/Ticket.png",
  },
  {
    desc: "70thb voucher 60 points",
    img: "assets/images/Group 90561.png",
  },
  {
    desc: "70thb voucher 60 points",
    img: "assets/images/Group 90561.png",
  },
  {
    desc: "1x fanta fest ticket",
    img: "assets/images/Ticket.png",
  },
  {
    desc: "70thb voucher 60 points",
    img: "assets/images/Group 90561.png",
  },
  {
    desc: "70thb voucher 60 points",
    img: "assets/images/Group 90561.png",
  },
]);
</script>

<template>
  <div
    class="relative bg-[url(public/assets/images/bg-3.jpg)] bg-cover bg-center w-full pt-[65px] dk:pt-[80px] text-center min-h-screen flex-col flex justify-between dk:justify-start"
  >
    <Icon
      name="arrow-left"
      class="cursor-pointer absolute top-[12px] left-[12px] dk:top-7 dk:left-[33px] text-[20px] dk:text-[30px]"
      @click="$emit('back')"
    />
    <Icon
      name="history"
      class="absolute top-[12px] right-[12px] dk:top-[25px] dk:right-[40px] text-[25px] dk:text-[40px]"
      @click="$emit('linkWalletHistory')"
    />

    <div class="absolute bottom-0 left-0 w-full dk:h-[168px] overflow-hidden">
      <img
        src="public/assets/images/DJ table.png"
        alt="image"
        class="w-full max-w-[718px] m-auto"
      />
    </div>

    <div>
      <h2
        class="gradient text-lg dk:text-xl font-bold p-[5px] dk:py-[8px] mb-[10px]"
      >
        you’ve earned 80 points
      </h2>
      <p class="text-sx dk:text-sm mb-[51px] dk:mb-10 font-fs">
        Expiring on DD/MM/YYYY
      </p>

      <h3 class="text-mdx dk:text-enormous mb-[14px] dk:mb-5">Your Prizes</h3>

      <div class="w-full max-w-[448px] mx-auto">
        <FlowWalletSlider :list="prizes" />
      </div>
      <p
        class="text-sm dk:text-base mt-[18px] dk:mt-5 dk:mb-10 px-5 font-fs max-w-[400px] mx-auto"
      >
        Please show the QR code in your wallet to redeem this prize at Fanta
        Fest from 9 - 10 Nov 2024. Can’t go to Fanta Fest? <br />Contact us for
        Delivery here
      </p>
    </div>

    <div class="px-[20px] pb-5 flex-col flex items-center relative z-10">
      <Button type="full" variation="white" @click="$emit('linkRedemption')"
        >use now</Button
      >
      <Button type="full" variation="black" @click="$emit('linkPrizes')"
        >REDEEM ANOTHER PRIZE</Button
      >
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
