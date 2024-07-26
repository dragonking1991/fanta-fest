<script setup>
const store = useAppStore();
const { flow, history } = storeToRefs(store);

const {
  back,
  linkHow,
  linkSupport,
  linkAbout,
  linkLeaderBoard,
  linkEnterPin,
  linkPrizes,
  linkPrizesDetail,
  linkPrizesReward,
  linkPrizesForm,
  linkWallet,
  linkWalletHistory,
  linkRedemption,
} = store;
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

    <FlowEnterPin v-if="flow === 4" @back="back" @linkPrizes="linkPrizes" />
    <FlowEnterPinInstantWin v-if="flow === 4.1" @back="back" @linkWallet="linkWallet" />

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

    <FlowRedemptionHigh
      v-if="flow === 11"
      @back="back"
      @linkWallet="linkWallet"
    />
    <FlowRedemptionLow
      v-if="flow === 11.2"
      @back="back"
      @linkWallet="linkWallet"
    />
    <FlowRedemptionDigitalCode
      v-if="flow === 11.3"
      @back="back"
      @linkWallet="linkWallet"
    />
    <FlowRedemptionDigitalQr
      v-if="flow === 11.4"
      @back="back"
      @linkWallet="linkWallet"
    />
    <FlowRedemptionExclusive
      v-if="flow === 11.5"
      @back="back"
      @linkWallet="linkWallet"
    />
  </TransitionGroup>
</template>

<style scoped lang="scss"></style>
