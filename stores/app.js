export const useAppStore = defineStore('app', () => {
  const flow = ref(-1);
  const history = ref([flow.value])
  const backCount = ref(0)

  const backIndex = computed(() => {
    return history.value.length > 2
      ? history.value[history.value.length - 2 - backCount.value]
      : -1
  })

  const handlePage = (index) => {
    console.log('page', backIndex.value, backCount.value, history.value);
    flow.value = index;
    backCount.value > 1
      ? backCount.value--
      : (backCount.value = 0)
    history.value = [...history.value, index];
  }

  const back = () => {
    console.log('===================');
    console.log('back', backIndex.value, backCount.value, history.value);
    backCount.value && backCount.value++
    handlePage(backIndex.value);
    !backCount.value && backCount.value++
  };

  const forward = () => {
    backCount.value && backCount.value--
    console.log(forwardIndex);
    handlePage(forwardIndex);
  };
  const linkHow = () => {
    handlePage(0);
  };
  const linkSupport = () => {
    handlePage(1);
  };
  const linkAbout = () => {
    handlePage(2);
  };
  const linkLeaderBoard = () => {
    handlePage(3);
  };
  const linkEnterPin = () => {
    handlePage(4);
  };
  const linkPrizes = () => {
    handlePage(5);
  };
  const linkPrizesDetail = () => {
    handlePage(6);
  };
  const linkPrizesReward = () => {
    handlePage(7);
  };
  const linkPrizesForm = () => {
    handlePage(8);
  };
  const linkWallet = () => {
    handlePage(9);
  };
  const linkWalletHistory = () => {
    handlePage(10);
  };
  const linkRedemption = () => {
    handlePage(11);
  };

  return {
    flow, history,
    back,
    forward,
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
    linkRedemption
  }
})