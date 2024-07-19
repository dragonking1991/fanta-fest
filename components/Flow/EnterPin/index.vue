<script setup>

const validated = ref(0);
const statePage = ref(1);
const input = ref("");

const inputHandle = () => {
  validated.value = input.value?.value ? 1 : 0;
};
</script>

<template>
  <div
    class="relative bg-[url(../../public/assets/images/bg-3.jpg)] bg-cover bg-center w-full h-screen pt-[48px] text-center"
  >
    <div class="absolute top-[12px] left-[12px] text-[20px] text-black" @click="$emit('back')">
      <Icon name="arrow-left" class="cursor-pointer" />
    </div>

    <FlowEnterPinWelcome v-if="statePage === 0" />
    <FlowEnterPinNext v-if="statePage === 2" />

    <div
      v-if="statePage === 1"
      class="flex flex-col justify-around text-center h-screen px-[20px]"
    >
      <div class="">
        <h2 class="uppercase text-large font-bold  mb-9">
          ENTER YOUR<br />
          <span class="text-blue text-huge">PIN CODE</span>
        </h2>

        <input
          placeholder="PIN CODE"
          ref="input"
          @input="inputHandle"
          class="w-[315px] h-[72px] m-auto text-center text-avg text-black"
        />

        <p class="font-fs text-sn  mt-[10px]">
          Find your pin from under Fanta bottle cap, inside Tasto packs or from
          participating fast food merchants.
        </p>
      </div>

      <div>
        <Button type="full" :disabled="!validated" variation="black">
          NEXT
        </Button>
        <a href="#" class="underline  font-fs mt-[13px]">
          Terms & conditions
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
