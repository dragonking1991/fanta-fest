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
    class="relative bg-[url(public/assets/images/bg-3.jpg)] bg-cover bg-center w-full pt-[65px] text-center"
  >
    <div
      class="absolute top-[12px] left-[12px] text-[20px] "
      @click="$emit('back')"
    >
      <Icon name="arrow-left" class="cursor-pointer" />
    </div>
    <div
      class="absolute top-[12px] right-[12px] text-[25px] "
      @click="$emit('linkWalletHistory')"
    >
      <Icon name="history" />
    </div>

    <img
      src="public/assets/images/DJ table.png"
      alt="image"
      class="absolute bottom-0 left-0 w-full"
    />

    <div class="min-h-[calc(100vh-60px)] z-10 relative">
      <h2 class="gradient  text-lg font-bold p-[5px] mb-[10px]">
        you’ve earned 80 points
      </h2>
      <p class=" text-sx mb-[51px]">Expiring on DD/MM/YYYY</p>

      <h3 class="text-mdx mb-[14px] ">Your Prizes</h3>

      <div class="w-full">
        <FlowWalletSlider :list="prizes" />
      </div>
      <p class=" text-sm mt-[18px] px-5 font-fs">
        Please show the QR code in your wallet to redeem this prize at Fanta
        Fest from 9 - 10 Nov 2024. Can’t go to Fanta Fest? <br />Contact us for
        Delivery here
      </p>

      <div class="px-[20px] pb-5 absolute bottom-3 left-0 w-full">
        <Button type="full" variation="white" @click="$emit('linkRedemption')">use now</Button>
        <Button type="full" variation="black" @click="$emit('linkPrizes')">REDEEM ANOTHER PRIZE</Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
