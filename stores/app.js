export const useAppStore = defineStore('app', () => {
  const flow = ref(-1);

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

  return {
    flow, back, linkHow,
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
    linkRedemption
  }
})