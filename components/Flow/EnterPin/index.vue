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
  }, 1000);
});
</script>

<template>
  <div
    class="relative bg-[url(public/assets/images/bg-3.jpg)] bg-cover bg-center w-full h-screen text-center"
  >
    <TransitionGroup name="flow">
      <FlowEnterPinWelcome v-if="state === 0" />
      <FlowEnterPinNext v-if="state === 2" @linkPrizes="$emit('linkPrizes')" @enterPin="state = 1" />
      <div
        v-if="state === 1"
        class="flex flex-col justify-around text-center h-screen px-[20px] pt-[48px]"
      >
        <div
          class="absolute top-[12px] left-[12px] text-[20px] text-black"
          @click="$emit('back')"
        >
          <Icon name="arrow-left" class="cursor-pointer" />
        </div>
        <div class="">
          <h2 class="uppercase text-large font-bold mb-9">
            ENTER YOUR<br />
            <span class="text-blue text-huge">PIN CODE</span>
          </h2>

          <input
            placeholder="PIN CODE"
            ref="input"
            @input="inputHandle"
            class="w-[315px] h-[72px] m-auto text-center text-avg text-black"
          />

          <p class="font-fs text-sn mt-[10px]">
            Find your pin from under Fanta bottle cap, inside Tasto packs or
            from participating fast food merchants.
          </p>
        </div>

        <div>
          <Button
            type="full"
            :disabled="!validated"
            variation="black"
            @click="submit"
          >
            NEXT
          </Button>
          <a href="#" class="underline font-fs text-xs mt-[13px]">
            Terms & conditions
          </a>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss"></style>
