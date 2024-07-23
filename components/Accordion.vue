<script setup>
const isOpen = ref(false);
</script>

<template>
  <div class="mb-[15px] dk:mb-[10px]">
    <div
      @click="isOpen = !isOpen"
      class="p-[5px] pr-8 relative cursor-pointer rounded-[7px] mb-[-5px] dk:p-3"
      :class="isOpen ? 'bg-white text-black' : 'bg-orange text-white'"
    >
      <slot name="title" />
      <Icon
        name="arrow-down"
        class="font-[20px] absolute right-4 top-[50%] translate-y-[-50%] transition-all transition-duration-300"
        :class="
          !isOpen ? 'text-white rotate-0' : 'text-orange rotate-[180deg]'
        "
      />
    </div>

    <div
      class="transition-all transition-duration-300 overflow-hidden border-white rounded-b-[7px]"
      :class="!isOpen ? 'max-h-[0px]' : 'border-white border max-h-[100vh]'"
    >
      <div class="p-[10px] dk:p-5 py-5">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
