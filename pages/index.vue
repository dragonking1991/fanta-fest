<script setup>
const flow = ref(-2);

const back = () => {
  flow.value = -1;
};
const linkHow = () => {
  flow.value = 0;
};
const linkSupport = () => {
  flow.value = 1;
};
const linkAbout = () => {
  flow.value = 2;
};
const linkLeaderBoard = () => {
  flow.value = 3;
};
const linkEnterPin = () => {
  flow.value = 4;
};
const linkPrizes = () => {
  flow.value = 5;
};
const linkPrizesDetail = () => {
  flow.value = 6;
};
const linkPrizesReward = () => {
  flow.value = 7;
};
const linkPrizesForm = () => {
  flow.value = 8;
};
const linkWallet = () => {
  flow.value = 9;
};
const linkWalletHistory = () => {
  flow.value = 10;
};
const linkRedemption = () => {
  flow.value = 11;
};
</script>

<template>
  <TransitionGroup name="flow">
    <FlowCounter v-if="flow === -2" />

    <FlowMain
      v-if="flow === -1"
      @linkHow="linkHow"
      @linkSupport="linkSupport"
      @linkAbout="linkAbout"
      @linkLeaderBoard="linkLeaderBoard"
      @linkEnterPin="linkEnterPin"
      @linkProfile="linkEnterPin"
      @linkPrizes="linkPrizes"
      @linkWallet="linkWallet"
    />

    <FlowHow v-if="flow === 0" @back="back" @linkEnterPin="linkEnterPin" />
    <FlowSupport v-if="flow === 1" @back="back" />
    <FlowAbout v-if="flow === 2" @back="back" @linkPrizes="linkPrizes" />

    <FlowLeaderBoard v-if="flow === 3" @back="back" />
    <FlowAnnouncement v-if="flow === 3.1" @back="back" />

    <FlowEnterPin v-if="flow === 4" @back="back" @linkPrizes="linkPrizes"/>

    <FlowPrizes
      v-if="flow === 5"
      @back="back"
      @linkPrizesDetail="linkPrizesDetail"
      @linkPrizesReward="linkPrizesReward"
    />

    <FlowPrizesDetail
      v-if="flow === 6"
      @back="back"
      @linkPrizesReward="linkPrizesReward"
    />

    <FlowPrizesReward
      v-if="flow === 8"
      @back="back"
      @linkPrizes="linkPrizes"
      @linkWallet="linkWallet"
    />

    <FlowPrizesForm v-if="flow === 7" @back="back" />

    <FlowWallet
      v-if="flow === 9"
      @back="back"
      @linkPrizes="linkPrizes"
      @linkWalletHistory="linkWalletHistory"
      @linkRedemption="linkRedemption"
    />

    <FlowWalletHistory v-if="flow === 10" @back="back" />

    <!-- <FlowRedemption v-if="flow === 11" @back="back" @linkWallet="linkWallet" /> -->
    <FlowRedemptionHigh v-if="flow === 11" @back="back" @linkWallet="linkWallet" />
    <FlowRedemptionLow v-if="flow === 11.2" @back="back" @linkWallet="linkWallet" />
    <FlowRedemptionDigitalCode v-if="flow === 11.3" @back="back" @linkWallet="linkWallet" />
    <FlowRedemptionDigitalQr v-if="flow === 11.4" @back="back" @linkWallet="linkWallet" />
    <FlowRedemptionExclusive v-if="flow === 11.5" @back="back" @linkWallet="linkWallet" />
  </TransitionGroup>
</template>

<style scoped lang="scss"></style>
