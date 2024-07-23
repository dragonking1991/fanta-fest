<script setup>
const validated = ref(0);
const state = ref(0);
const input = ref("");

const inputHandle = () => {
  validated.value = input.value?.value ? 1 : 0;
};
const submit = () => {
  if (validated.value) {
    state.value = 2;
  }
};

onMounted(() => {
  setTimeout(() => {
    state.value = 1;
  }, 2500);
});
</script>

<template>
  <div
    class="relative bg-[url(public/assets/images/bg-3.jpg)] bg-cover bg-center w-full h-screen text-center"
  >
    <TransitionGroup name="flow">
      <FlowEnterPinWelcome v-if="state === 0" />
      <FlowEnterPinNext v-if="state === 2" @linkPrizes="$emit('linkPrizes')" @enterPin="state = 1" :process="70" />
      <div
        v-if="state === 1"
        class="flex flex-col justify-around dk:justify-center text-center h-screen px-[20px] pt-[48px]"
      >
        <div
          class="absolute top-[12px] left-[12px] text-[20px] text-black"
          @click="$emit('back')"
        >
          <Icon name="arrow-left" class="cursor-pointer" />
        </div>
        <div class="dk:mb-10 max-w-[400px] mx-auto">
          <h2 class="uppercase dk:text-enormous text-large font-bold mb-9">
            ENTER YOUR<br />
            <span class="text-blue text-huge">PIN CODE</span>
          </h2>

          <input
            placeholder="PIN CODE"
            ref="input"
            @input="inputHandle"
            class="w-[315px] h-[72px] m-auto text-center text-avg text-black rounded-[7px]"
          />

          <p class="font-fs text-sn dk:text-base mt-[10px] dk:mt-5">
            Find your pin from under Fanta bottle cap, inside Tasto packs or
            from participating fast food merchants.
          </p>
        </div>

        <div class="w-[280px] mx-auto">
          <Button
            type="full"
            :disabled="!validated"
            variation="black"
            @click="submit"
          >
            NEXT
          </Button>
          <a href="#" class="underline font-fs text-xs dk:text-sx mt-[13px]">
            Terms & conditions
          </a>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss"></style>
