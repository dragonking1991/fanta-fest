<script setup>
const isOpen = ref(false);
</script>

<template>
  <div class="mb-[15px]">
    <div
      @click="isOpen = !isOpen"
      class="p-[5px] pr-8 relative cursor-pointer rounded-[7px] mb-[-5px]"
      :class="isOpen ? 'bg-white text-black' : 'bg-orange text-white'"
    >
      <slot name="title" />
      <div
        class="text-[20px] absolute right-4 top-[50%] translate-y-[-50%] transition-all transition-duration-300"
        :class="
          !isOpen ? 'text-white rotate-0' : 'text-orange rotate-[-135deg]'
        "
      >
        <Icon name="arrow-down" />
      </div>
      <!-- <div
        class="border-r-2 border-b-2 w-[15px] h-[15px] absolute right-4 top-[50%] translate-y-[-50%] transition-all transition-duration-300"
        :class="
          !isOpen ? 'tex-white rotate-45' : 'border-orange rotate-[-135deg]'
        "
      ></div> -->
    </div>

    <div
      class="transition-all transition-duration-300 overflow-hidden text-white border-white rounded-b-[7px]"
      :class="!isOpen ? 'max-h-[0px]' : 'border-white border max-h-[100vh]'"
    >
      <div class="p-[10px] py-5">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
