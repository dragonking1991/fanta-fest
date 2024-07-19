<script setup>
  const $emit = defineEmits(['continue'])
</script>

<template>
  <div class="text-center bg-green relative h-screen relative overflow-auto">
    <img
      src="../../public/assets/images/image32.png"
      alt="bg"
      class="absolute top-0 left-0 w-full"
    />
    <div class="relative h-screen flex justify-center items-center">
      <div>
        <div class="px-6">
          <h3 class="text-yellow text-lg">Congraturlation</h3>
          <p class="">
            You just won a prize for being one of the 140,000 earliest
            participants
          </p>
        </div>
        <div
          class="bg-[url(../../public/assets/images/image44.png)] bg-center w-full aspect-[376/596] flex justify-center items-center mt-[-35%] mb-[-20%]"
        >
          <img src="../../public/assets/images/voucher.png" alt="voucher" />
        </div>
        <div class="px-6">
          <p class=" mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </p>
          <Button type="full" @click="$emit('continue')">Continue to explore</Button>
        </div>
      </div>
    </div>
  </div>
</template>
