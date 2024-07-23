<script setup>
const list = ref([
  {
    title:
      "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci faucibus ornare. Nam tempus felis sed nulla commodo, vel maximus dolor.",
  },
  {
    title:
      "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci faucibus ornare. Nam tempus felis sed nulla commodo, vel maximus dolor.",
  },
  {
    title:
      "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci faucibus ornare. Nam tempus felis sed nulla commodo, vel maximus dolor.",
  },
  {
    title:
      "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci faucibus ornare. Nam tempus felis sed nulla commodo, vel maximus dolor.",
  },
  {
    title:
      "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci faucibus ornare. Nam tempus felis sed nulla commodo, vel maximus dolor.",
  },
  {
    title:
      "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci faucibus ornare. Nam tempus felis sed nulla commodo, vel maximus dolor.",
  },
  {
    title:
      "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci faucibus ornare. Nam tempus felis sed nulla commodo, vel maximus dolor.",
  },
  {
    title:
      "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci faucibus ornare. Nam tempus felis sed nulla commodo, vel maximus dolor.",
  },
  {
    title:
      "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci faucibus ornare. Nam tempus felis sed nulla commodo, vel maximus dolor.",
  },
  {
    title:
      "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci faucibus ornare. Nam tempus felis sed nulla commodo, vel maximus dolor.",
  },
  {
    title:
      "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci faucibus ornare. Nam tempus felis sed nulla commodo, vel maximus dolor.",
  },
  {
    title:
      "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere justo vel orci faucibus ornare. Nam tempus felis sed nulla commodo, vel maximus dolor.",
  },
]);
</script>

<template>
  <div
    class="relative bg-[url(public/assets/images/bg-3.jpg)] bg-cover bg-center w-full min-h-screen pt-[48px]"
  >
    <div
      class="absolute top-[12px] left-[12px] text-[20px] dk:text-[30px] dk:top-5 dk:left-5"
      @click="$emit('back')"
    >
      <Icon name="arrow-left" class="cursor-pointer" />
    </div>
    <div class="dk:container">
      <h2
        class="mb-[27px] dk:mb-10 text-extra dk:text-enormous text-center dk:text-left font-bold"
      >
        SUPPORT
      </h2>
      <div class="dk:flex justify-between items-start">
        <div
          class="text-sx dk:text-base overflow-auto max-h-[calc(100vh-200px)] p-5 dk:p-0 dk:max-w-[739px]"
        >
          <Accordion v-for="item in list">
            <template #title>
              {{ item.title }}
            </template>
            <template #content>
              {{ item.desc }}
            </template>
          </Accordion>
        </div>
        <div class="text-center p-5 pt-3 dk:max-w-[280px]">
          <!-- <Icon name="arrow-down" class="m-auto"/> -->
          <p class="font-fs text-xs dk:text-base mt-[17px]">
            Can’t find an answer for your question?
          </p>
          <Button type="full" variation="black" class="dk:mt-3">CONTACT CALL CENTER</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
