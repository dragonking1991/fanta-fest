<script setup>
const flow = ref(0);
const back = () => {
  flow.value = 0
}
</script>

<template>
  <FlowMain
    v-if="flow === 0"
    @linkEarn="flow = 1"
    @linkRedeem="flow = 2"
    @linkLeader="flow = 3"
    @linkHow="flow = 1"
    @linkProfile="flow = 1"
    @linkWallet="flow = 1"
    @linkQuestion="flow = 1"
  />

  <FlowSupport v-if="flow === 1" @back="back" />
  <FlowAbout v-if="flow === 2" @back="back" />
  <FlowLeaderBoard v-if="flow === 3" @back="back" />
  <FlowEnterPin v-if="flow === 4" @back="back" />

  <FlowPrizes v-if="flow === 5" @back="back" />
  <FlowPrizesDetail v-if="flow === 6" @back="back" />
  <FlowPrizesForm v-if="flow === 7" @back="back" />
  <FlowPrizesReward v-if="flow === 8" @back="back" />

  <FlowWallet v-if="flow === 9" @back="back" />
  <FlowWalletHistory v-if="flow === 9" @back="back" />

  <FlowRedemptionHight v-if="flow === 9" @back="back" />
</template>

<style scoped lang="scss"></style>
