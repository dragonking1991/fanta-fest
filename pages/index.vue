<script setup>
const flow = ref(-1);
const back = () => {
  flow.value = -1;
};
const linkRedeem = () => {
  console.log('index');
  flow.value = 5;
};
</script>

<template>
  <FlowMain
    v-if="flow === -1"
    @linkHow="flow = 0"
    @linkQuestion="flow = 1"
    @linkAbout="flow = 2"
    @linkLeader="flow = 3"
    @linkEarn="flow = 4"
    @linkProfile="flow = 4"
    @linkRedeem="linkRedeem"
    @linkWallet="flow = 9"
  />

  <FlowHow v-if="flow === 0" @back="back" />
  <FlowSupport v-if="flow === 1" @back="back" />
  <FlowAbout v-if="flow === 2" @back="back" @linkRedeem="linkRedeem"  />
  <FlowLeaderBoard v-if="flow === 3" @back="back" />
  <FlowEnterPin v-if="flow === 4" @back="back" />

  <FlowPrizes v-if="flow === 5" @back="back" />
  <FlowPrizesDetail v-if="flow === 6" @back="back" />
  <FlowPrizesForm v-if="flow === 7" @back="back" />
  <FlowPrizesReward v-if="flow === 8" @back="back" />

  <FlowWallet v-if="flow === 9" @back="back" @linkHistory="flow = 10" />
  <FlowWalletHistory v-if="flow === 10" @back="back" />

  <FlowRedemptionHigh v-if="flow === 11" @back="back" />
  <FlowRedemptionLow v-if="flow === 12" @back="back" />
  <FlowRedemptionDigitalCode v-if="flow === 13" @back="back" />
  <FlowRedemptionDigitalQr v-if="flow === 14" @back="back" />
</template>

<style scoped lang="scss"></style>
